import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue';
import AppAbout from '../pages/AppAbout.vue';
import AppBeers from '../pages/AppBeers.vue';

const routes = [
    { path: '/', redirect: '/beers' }, // Redirect automatico alla route "/beers"
    { path: '/about', component: AppAbout, name: 'about' },
    { path: '/beers', component: AppBeers, name: 'beers' },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };