import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
//import Contact from "../views/Contact.vue";
//import About from "../views/About.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/basic',
    name: 'Basic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue'),
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "dataBinding" */ '../views/DataBinding.vue'),
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "dataBindingHtml" */ '../views/DataBindingHtml.vue'),
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue'),
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "serverdata" */ '../views/ServerData.vue'),
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue'),
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "mixin" */ '../views/MixinTest.vue'),
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "compositionapiprovide" */ '../views/CompositionAPIProvide.vue'),
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customdirective" */ '../views/CustomDirective.vue'),
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugins.vue'),
  },
  {
    path: '/storeaccess',
    name: 'Store Access',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue'),
  },
  {
    path: '/videoPlayer',
    name: 'videoPlayer',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../components/VideoPlayer.vue'),
  },
  {
    path: '/videoOptions',
    name: 'videoOptions',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/VideoOptions.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/Test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
