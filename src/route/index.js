import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/home");
const LP = () => import("@/views/lp");

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/lp",
    name: "lp",
    component: LP,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
