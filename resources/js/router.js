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
        path: "/original_brand/:lang",
        component: OriginalBrand,
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
