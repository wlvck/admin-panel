import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from './router';

import('@/style/main.scss')

const app = createApp(App);
const store = createPinia();
app.use(store).use(router).mount('#app')
