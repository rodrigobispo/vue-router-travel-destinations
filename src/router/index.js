import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:id/:slug",
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    // props: true
    props: route => ({ id: parseInt(route.params.id) })
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: 'experience.show',
    component: () => import(/* webpackChunkName: "experiense-show" */ '@/views/ExperienceShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
