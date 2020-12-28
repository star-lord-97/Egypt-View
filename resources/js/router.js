import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Tours from "./views/Tours.vue";
import Translation from "./views/Translation.vue";
import OriginalBrand from "./views/OriginalBrand.vue";
import EventsResearch from "./views/EventsResearch.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },

    {
        path: "/tours",
        component: Tours,
    },

    {
        path: "/translation",
        component: Translation,
    },

    {
        path: "/original_brand",
        component: OriginalBrand,
    },

    {
        path: "/events_research",
        component: EventsResearch,
    },

    {
        path: "/gallery",
        component: Gallery,
    },

    {
        path: "/contact",
        component: Contact,
    },

    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
