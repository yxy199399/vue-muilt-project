import Vue from "vue";
import VueRouter from "vue-router";
import { aRoutes } from "./children";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: aRoutes
});

export default router;
