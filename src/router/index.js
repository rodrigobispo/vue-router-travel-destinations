import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Brazil from "@/views/Brazil.vue";
import Hawaii from "@/views/Hawaii.vue";
import Jamaica from "@/views/Jamaica.vue";
import Panama from "@/views/Panama.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/Jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
