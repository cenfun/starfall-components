import {
    defineComponent,
    onMounted,
    onUpdated,
    onUnmounted
} from './vue-lit.js';

import { html } from 'lit';
import { reactive } from '@vue/reactivity';

defineComponent('my-component', () => {
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

    const child = html`<my-child msg=${state.text}></my-child>`;

    return () => html`
      <button @click=${toggle}>toggle child</button>
      <div>${state.text} <input value=${state.text} @input=${onInput}></div>
      ${state.show ? child : ''}
    `;
});

defineComponent('my-child', ['msg'], (props) => {
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
      <div>${props.msg} ${state.count}</div>
      <button @click=${increase}>increase</button>
    `;
});
