import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import dayjs from "dayjs";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn"); // 全局使用简体中文

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
