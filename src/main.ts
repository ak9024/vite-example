import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'

const app = createApp(App)
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  // Handle global errors
  console.error('Global error:', err, info)
}

app.mount('#app')
