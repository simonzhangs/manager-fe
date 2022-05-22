import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';

import config from './config'
import axios from "axios";

axios.get(config.mockApi+ '/login').then(res => {
    console.log(res);
})


console.log("env =>", import.meta.env);
const app = createApp(App);
app.use(router).use(ElementPlus).mount("#app");
