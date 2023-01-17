import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

export const SERVER_URL = process.env.PROD
  ? "https://hexxagon-web-server.onrender.com"
  : "http://localhost:9000";
export const SERVER_WS_URL = process.env.PROD
  ? "wss://hexxagon-web-server.onrender.com"
  : "ws://localhost:9000";


const app = createApp(App)
app.mount('#app')
app.use(router);