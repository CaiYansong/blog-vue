import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/home/index.vue"),
    meta: { title: "home" },
  },
  {
    path: "/lp",
    name: "lp",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/lp/index.vue"),
  },
  {
    path: "/lp/l",
    name: "lp-l",
    component: () => import(/* webpackChunkName: "about" */ "@/views/lp/l.vue"),
  },
  {
    path: "/lp/class-schedule",
    name: "lp-class-schedule",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/lp/class-schedule/index.vue"
      ),
  },
  {
    path: "/lp/local-note",
    name: "lp-local-note",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/lp/local-note.vue"),
  },
  {
    path: "/lp/memory-tool",
    name: "lp-memory-tool",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/lp/memory-tool.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "@/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
