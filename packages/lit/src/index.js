import {
    defineComponent,
    onMounted,
    onUpdated,
    onUnmounted
} from './vue-lit.js';

import { html } from 'lit';
import {
    effect, reactive, isReactive
} from '@vue/reactivity';

const state = reactive({
    value: 'hello',
    data: {
        text: 'hello',
        show: true,
        count: 0
    }
});

console.log('state', isReactive(state));
console.log('state.data', isReactive(state.data));

let someValue;
effect(() => {
    someValue = state.value;
});


defineComponent('lit-component', ['style'], (props) => {
    
    const toggle = () => {
        state.data.show = !state.data.show;
    };
    const onInput = e => {
        state.data.text = e.target.value;
        state.value = state.data.text;
    };

    return () => {

        const child = html`<lit-child msg=${state.data.text} style="display:block;background:#ccc;padding:10px;"></lit-child>`;

        return html`<div style="${props.style}">
                <button @click=${toggle}>toggle child</button>
                <div>${state.data.text}</div>
                <div>${state.value}</div>
                <div>${someValue}</div>
                <div>
                    <input type="text" value=${state.data.text} @input=${onInput} />
                </div>
                ${state.data.show ? child : ''}
            </div>
        `;
    };
});

defineComponent('lit-child', ['msg', 'style'], (props) => {

    const increase = () => {
        state.data.count++;
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
        <div style="${props.style}">${props.msg} ${state.data.count}
            <button @click=${increase}>increase</button>
        </div>
    `;
});
