import { createApp } from "vue";
import App from './App.vue'

import router from "./router";

const app = createApp(App)
// step 4
app.use(router)
app.mount('#app')

