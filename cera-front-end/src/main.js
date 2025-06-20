import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router'
import { createPinia } from 'pinia'
import './style.css'

createApp(App).use(createPinia()).use(router).mount('#app')
