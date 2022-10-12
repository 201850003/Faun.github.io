import {createApp} from "vue"
import App from './App.vue'
import {router} from "@/router";


const app = createApp(App)
app.config.warnHandler = () => null
app.config.errorHandler = () => null
app.use(router)
app.mount('#app')
