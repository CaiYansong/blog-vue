import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/home/index.vue"),
    meta: { title: "蔡延松" },
  },
  {
    path: "/lp",
    name: "lp",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/lp/index.vue"),
    meta: {
      title: "蔡延松-LP",
    },
  },
  {
    path: "/lp/l",
    name: "lp-l",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/lp/l/index.vue"),
    meta: {
      title: "蔡延松-L",
    },
  },
  {
    path: "/lp/class-schedule",
    name: "lp-class-schedule",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/lp/class-schedule/index.vue"
      ),
    meta: {
      title: "LP-课程表",
    },
  },
  {
    path: "/note",
    name: "note",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/note/index.vue"),
    meta: {
      title: "蔡延松-Note",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      title: "蔡延松-About",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "@/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
