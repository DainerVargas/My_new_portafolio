import { createApp } from 'vue';

const app = createApp({});
import MiComponente from './components/ExampleComponent.vue';
app.component('mi-componente', MiComponente);
app.mount('#app');

const menu = createApp({});
import Menu from './components/menu.vue';
menu.component('mi-menu', Menu);
menu.mount('#menu');




