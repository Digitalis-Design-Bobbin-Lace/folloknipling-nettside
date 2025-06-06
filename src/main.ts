import '@jsonforms/vue-vanilla/vanilla.css'
import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'

createApp(App).use(router).mount('#app')
