import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
import router from "./router.js";
import Provider from './pages/Provider.vue';
import naive from 'naive-ui';
import {createPinia} from 'pinia'
import './css/style.css'
const pinia = createPinia();
const app = createApp(Provider);
app.use(pinia);
app.use(naive);
app.use(router);
app.mount('#app')


