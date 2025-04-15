import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'

// add comment with new branch
const app = createApp(App)
app.use(router)
app.mount('#app')
