import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'

// test commit in branch master.
const app = createApp(App)
app.use(router)
app.mount('#app')
