import {
    createApp, h, useSlots
} from 'vue';

import Portal from './portal.vue';

const componentMap = new WeakMap();
export const destroyComponent = function($el) {
    if (!$el) {
        return;
    }
    if (typeof $el === 'string') {
        $el = document.querySelector($el);
    }
    const component = componentMap.get($el);
    if (component) {
        component.unmount();
    }
};

export const createComponent = function(props, slots, container) {
    const Component = this;

    if (typeof slots === 'function') {
        slots = slots.call(this, h);
    }

    // full signature
    // function h(
    //  type: string | Component,
    //  props?: object | null,
    //  children?: Children | Slot | Slots
    // ): VNode

    //container state
    const hasContainer = Boolean(container);

    let instance;
    const instanceRender = () => {
        instance = h(Component, props, slots);
        return instance;
    };

    const app = createApp({
        setup() {
            //async
            if (hasContainer) {
                return instanceRender;
            }
            return () => h(Portal, {}, {
                default: instanceRender
            });
        }
    });

    let portalContainer;
    if (!hasContainer) {
        portalContainer = document.createElement('div');
        container = portalContainer;
    }

    const component = app.mount(container);

    //custom unmount for component
    component.unmount = () => {
        app.unmount();
        if (portalContainer) {
            portalContainer.remove();
            portalContainer = null;
        }
    };

    //component.$el is componentContainer.firstChild
    //console.log(component.$el, componentContainer.firstChild);

    //console.log(instance.el);

    componentMap.set(instance.el, component);

    return component;

};

export const getSlot = function(name) {
    const slots = useSlots();
    const fun = slots[name || 'default'];
    if (typeof fun === 'function') {
        return fun();
    }
};

export default {
    createComponent,
    destroyComponent,
    getSlot
};
