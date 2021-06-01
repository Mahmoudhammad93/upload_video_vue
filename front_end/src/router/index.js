import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Success from "../views/success/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "success",
    component: Success,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
