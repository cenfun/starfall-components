import { createApp } from 'vue';
import App from './app.vue';

const container = document.createElement('div');
document.body.appendChild(container);

const app = createApp(App);
app.mount(container);
