import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from '@/data.json';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/protected",
    name: 'protected',
    component: () => import('@/views/Protected.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: "/destination/:id/:slug",
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    // props: true
    props: route => ({ id: parseInt(route.params.id) }),
    
    beforeEnter(to, from) { // eslint-disable-line no-unused-vars

      const exist = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exist) return { 
        name: 'NotFound',
        // allows keeping the URL while rendering a different page
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: 'experience.show',
        component: () => import(/* webpackChunkName: "experiense-show" */ '@/views/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  }
});

/*
a global navigation guard:
every single time a route changes in the application,
this function is fired. we can access meta data.
*/ 
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'login' }
  }
})

export default router;
