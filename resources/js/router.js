import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Tours from "./views/Tours.vue";
import Translation from "./views/Translation.vue";
import OriginalBrandIndex from "./views/OriginalBrand/OriginalBrandIndex.vue";
import OriginalBrandShow from "./views/OriginalBrand/OriginalBrandShow.vue";
import EventsResearch from "./views/EventsResearch.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import HekmatShimadzu from "./views/HekmatShimadzu.vue";
import Login from "./views/Login.vue";
import Products from "./views/Admin/Products.vue";
import Messages from "./views/Admin/Messages.vue";

const routes = [
    {
        path: "/:lang",
        component: Home,
    },

    {
        path: "/login/:lang",
        component: Login,
    },

    {
        path: "/products/:lang",
        component: Products,
        meta: {
            requiresAdmin: true,
        },
    },

    {
        path: "/messages/:lang",
        component: Messages,
        meta: {
            requiresAdmin: true,
        },
    },

    {
        path: "/tours/:lang",
        component: Tours,
    },

    {
        path: "/translation/:lang",
        component: Translation,
    },

    {
        path: "/original_brand/:id/:lang",
        component: OriginalBrandShow,
    },

    {
        path: "/original_brand/:lang",
        component: OriginalBrandIndex,
    },

    {
        path: "/events_research/:lang",
        component: EventsResearch,
    },

    {
        path: "/gallery/:lang",
        component: Gallery,
    },

    {
        path: "/contact/:lang",
        component: Contact,
    },

    {
        path: "/about/:lang",
        component: About,
    },

    {
        path: "/team/hekmat_shimadzu/:lang",
        component: HekmatShimadzu,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAdmin)) {
        if (!localStorage.getItem("adminToken")) {
            next({
                path: "/login/en",
                query: { redirect: to.fullPath },
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
