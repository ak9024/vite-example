import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'

// Create a new Vue application instance using the main App component
const app = createApp(App)
app.use(router)
app.mount('#app')
