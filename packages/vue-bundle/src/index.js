import { createApp, App } from '../../vue/src/index.js';

const container = document.createElement('div');
document.body.appendChild(container);

const app = createApp(App);
app.mount(container);
