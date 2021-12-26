import { createApp } from "vue";
// 解决：按需引入 message 样式不生效问题
import "element-plus/theme-chalk/el-message.css";
import dayjs from "dayjs";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn"); // 全局使用简体中文

// 动态 title
router.beforeEach((to: { meta?: { title?: string } }, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
