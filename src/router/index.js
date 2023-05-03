import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Jamaica from "@/views/Jamaica.vue";
// import Panama from "@/views/Panama.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () => import(/* webpackChunkName: "brazil" */ "@/views/Brazil.vue"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () => import(/* webpackChunkName: "hawaii" */ "@/views/Hawaii.vue"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: Jamaica,
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: Panama,
  // },
  {
    path: "/destination/:id/:slug",
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    // props: true
    props: route => ({ id: parseInt(route.params.id) })
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'my-active-link'
});

export default router;
