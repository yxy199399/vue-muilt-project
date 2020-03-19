import Home from "../views/Home.vue";
import Index from "../views/Index.vue";

export const bRoutes = [
  {
    path: "/projectB",
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
