import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home.vue";
import Description from "./views/Description.vue";

Vue.use(VueRouter);

const myRoutes = [
    {
        path: "/",
        redirect: {
            name: "Home"
    }
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/description",
        name: "Description",
        component: Description,
       
    }

];


const router = new VueRouter({
    mode: 'history',
    routes: myRoutes
});



export default router;
