import Vue from "vue";
import VueRouter from "vue-router";
import { aRoutes } from "@/projects/Aproject/router/children";
import { bRoutes } from "@/projects/Bproject/router/children";
Vue.use(VueRouter);
const routes = [...aRoutes, ...bRoutes];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
