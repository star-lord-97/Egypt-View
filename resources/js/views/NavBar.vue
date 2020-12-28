<template>
    <div>
        <!-- fixed nav -->
        <nav
            class="w-full font-staatliches tracking-widest lg:text-3xl text-xl fixed z-30 top-0"
        >
            <!-- flex wrapper with justify between -->
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
            >
                <!-- left dev of the nav, the logo -->
                <div class="pl-4 flex items-center">
                    <router-link
                        class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-primary"
                        to="/"
                    >
                        <img
                            src="/img/logo.png"
                            alt="egypt-view logo"
                            class="lg:w-32 w-16 inline-block"
                        />
                    </router-link>
                </div>
                <!-- right dev, a menu for anything below large devices -->
                <div class="block lg:hidden pr-4">
                    <button
                        class="flex items-center p-1 focus:outline-none focus:shadow-outline"
                        @click="state.hideMobileMenu = !state.hideMobileMenu"
                    >
                        <svg
                            class="fill-current h-6 w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                <!-- right dev, a menu for large devices -->
                <div
                    class="w-full flex lg:flex justify-center items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    :class="{ hidden: state.hideMobileMenu }"
                >
                    <ul class="lg:flex justify-end flex-1 items-center">
                        <li class="lg:mr-3">
                            <router-link
                                class="inline-block no-underline text-black px-4 py-2 lg:border-2 lg:rounded-3xl lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                                to="/"
                                >Home</router-link
                            >
                        </li>
                        <li class="lg:mr-3 group inline-block">
                            <button
                                class="flex items-center text-black px-4 py-2 lg:border-2 lg:rounded-3xl lg:border-primary lg:hover:bg-primary lg:hover:text-white cursor-default focus:outline-none"
                            >
                                <span class="mr-2">Services</span>
                                <svg
                                    class="fill-current h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </button>
                            <div
                                class="lg:absolute text-black pt-1 hidden group-hover:block lg:text-xl text-md rounded-lg bg-white tracking-normal"
                            >
                                <router-link
                                    class="bg-white lg:flex lg:justify-center ml-4 lg:ml-0 block px-2 lg:py-2 py-0 lg:border-2 lg:border-primary lg:rounded-3xl lg:hover:bg-primary lg:hover:text-white"
                                    to="/tours"
                                    >Tours</router-link
                                >
                                <router-link
                                    to="/translation"
                                    class="bg-white lg:flex lg:justify-center ml-4 lg:ml-0 block px-2 lg:py-2 py-0 lg:border-2 lg:border-primary lg:rounded-3xl lg:hover:bg-primary lg:hover:text-white"
                                    >Translation</router-link
                                >
                                <router-link
                                    to="original_brand"
                                    class="bg-white lg:flex lg:justify-center ml-4 lg:ml-0 block px-2 lg:py-2 py-0 lg:border-2 lg:border-primary lg:rounded-3xl lg:hover:bg-primary lg:hover:text-white"
                                    >Original Brand</router-link
                                >
                                <router-link
                                    to="/events_research"
                                    class="bg-white lg:flex lg:justify-center ml-4 lg:ml-0 block px-2 lg:py-2 py-0 lg:border-2 lg:border-primary lg:rounded-3xl lg:hover:bg-primary lg:hover:text-white"
                                    >Events & Research</router-link
                                >
                            </div>
                        </li>
                        <li class="lg:mr-3">
                            <router-link
                                class="inline-block no-underline text-black px-4 py-2 lg:border-2 lg:rounded-3xl lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                                to="/gallery"
                                >Gallery</router-link
                            >
                        </li>
                        <li class="lg:mr-3">
                            <router-link
                                class="inline-block no-underline text-black px-4 py-2 lg:border-2 lg:rounded-3xl lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                                to="/contact"
                                >Contact</router-link
                            >
                        </li>
                        <li class="lg:mr-3">
                            <router-link
                                class="inline-block no-underline text-black px-4 py-2 lg:border-2 lg:rounded-3xl lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                                to="/about"
                                >About</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="border-b border-gray-200 opacity-25 my-0 py-0" />
        </nav>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    setup() {
        const state = reactive({
            hideMobileMenu: true,
        });

        return { state };
    },
};
</script>

<style scoped>
.router-link-active {
    font-weight: 600;
    color: #cb3233;
}

@media only screen and (min-width: 1024px) {
    .router-link-active:hover {
        color: white;
    }
}
</style>
