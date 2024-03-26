import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { Message } from '@arco-design/web-vue'

import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
Message._context = app._context

app.use(pinia)
app.use(router)
app.use(ArcoVueIcon)

app.mount('#app')
