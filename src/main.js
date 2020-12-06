import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/resets.css'
import '@/assets/css/border.css'
import '@/assets/js/common.js'

import myPlugin from '@/components/common'
createApp(App).use(router).use(store).use(myPlugin).mount('#app')
