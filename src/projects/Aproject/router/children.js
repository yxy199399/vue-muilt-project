import Home from "../views/Home.vue";
import Index from "../views/Index.vue";

export const aRoutes = [
  {
    path: "/projectA",
    name: "Home",
    component: Index,
    children: [
      {
        path: "home",
        component: Home
      }
    ]
  }
];
