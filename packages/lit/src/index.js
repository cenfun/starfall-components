import {
    defineComponent,
    onMounted,
    onUpdated,
    onUnmounted
} from './vue-lit.js';

import { html } from 'lit';
import { reactive } from '@vue/reactivity';

defineComponent('my-component', ['style'], (props) => {
    const state = reactive({
        text: 'hello',
        show: true
    });
    const toggle = () => {
        state.show = !state.show;
    };
    const onInput = e => {
        state.text = e.target.value;
    };

    return () => {

        const child = html`<my-child msg=${state.text} style="display:block;background:#ccc;padding:10px;"></my-child>`;

        return html`<div style="${props.style}">
            <button @click=${toggle}>toggle child</button>
            <div>${state.text} <input value=${state.text} @input=${onInput}></div>
            ${state.show ? child : ''}
        </div>
        `;
    };
});

defineComponent('my-child', ['msg', 'style'], (props) => {
    const state = reactive({
        count: 0
    });
    const increase = () => {
        state.count++;
    };

    onMounted(() => {
        console.log('child mounted');
    });

    onUpdated(() => {
        console.log('child updated');
    });

    onUnmounted(() => {
        console.log('child unmounted');
    });

    return () => html`
        <div style="${props.style}">${props.msg} ${state.count}
            <button @click=${increase}>increase</button>
        </div>
    `;
});
