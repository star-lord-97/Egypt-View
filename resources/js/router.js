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

const routes = [
    {
        path: "/:lang",
        component: Home,
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

export default router;
