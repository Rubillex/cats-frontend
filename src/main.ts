import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

import App from '@/App.vue';
import router from '@/router';

import '@/assets/styles/styles.scss';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);

app.component('scroll-parallax', ScrollParallax);

app.mount('#app');
