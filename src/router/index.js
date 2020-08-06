import Vue from 'vue';
import VueRouter from 'vue-router';

import Shows from '@/components/Shows.vue';
import Details from '@/components/Details.vue';
/* import NotFound from '@/components/NotFound.vue'; */

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Shows
        },
        {
            path: '/shows/:id',
            component: Details
        },
        /* {
            path: '*',
            component: NotFound
        } */
    ]
})