import { createApp } from 'vue';

const app = createApp({});
import MiComponente from './components/ExampleComponent.vue';
app.component('mi-componente', MiComponente);
app.mount('#app');


const About = createApp({});
import AboutMe from './components/AboutMe.vue';
About.component('about-me', AboutMe);
About.mount('#about');





