import Vue from "vue";
import VueRouter from "vue-router";
import { bRoutes } from "./children";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: bRoutes
});

export default router;
