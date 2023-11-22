import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";
import Default from "../components/layout/Default.vue";
import NoSidebar from "../components/layout/NoSidebar.vue";
import Home from "../components/Home.vue";
import About from "../components/pages/About.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    history: true,
    hashbang: false,
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            // meta: {
            //     layout: NoSidebar
            // }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: {
                layout: NoSidebar
            }
        }
    ]
});

// progressbar
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done();
});

export default router;