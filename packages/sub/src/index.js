import Component from './component.vue';
import { createComponent } from 'starfall-components-core';
Component.createComponent = createComponent.bind(Component);
export default Component;
