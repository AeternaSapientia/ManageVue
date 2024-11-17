import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path : "/",
        name : "Home",
        component : () => import('./Views/HomePage.vue')
    },
    {
        path : "/test",
        name : "Test",
        component : () => import('./Views/TestPage.vue')
    },
    {
        path : '/:pathMatch(.*)*',
        name : "NotFound",
        component : () => import('./Views/NotFoundPage.vue')
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;