import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

// Use BootstrapVue 3
app.use(BootstrapVue3)

app.mount('#app')
