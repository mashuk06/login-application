import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("../components/Dashboard.vue"),
    },
  ],
});
