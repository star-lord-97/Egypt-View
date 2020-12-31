<template>
    <!-- fixed nav -->
    <nav
        class="w-full font-nunito tracking-tighter lg:text-2xl text-xl fixed z-30 top-0 bg-white"
    >
        <!-- flex wrapper with justify between -->
        <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
        >
            <!-- left dev of the nav, the logo -->
            <div class="pl-4 flex items-center">
                <router-link
                    v-show="$route.params.lang == 'en'"
                    class="font-bold flex items-center"
                    to="/en"
                >
                    <img
                        src="/img/icon.png"
                        alt="egypt-view logo"
                        class="lg:w-20 w-16 inline-block"
                    />
                    <span
                        class="ml-8 text-5xl font-opensans tracking-wide font-extrabold hidden text-primary lg:block"
                        >Egypt-View</span
                    >
                </router-link>
                <router-link
                    v-show="$route.params.lang == 'jp'"
                    class="font-bold flex items-center"
                    to="/jp"
                >
                    <img
                        src="/img/icon.png"
                        alt="egypt-view logo"
                        class="lg:w-20 w-16 inline-block"
                    />
                    <span
                        class="ml-8 text-5xl font-opensans tracking-wide font-extrabold hidden text-primary lg:block"
                        >Egypt-View</span
                    >
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
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <!-- right dev, a menu for large devices -->
            <div
                class="w-full flex lg:flex justify-center items-center lg:w-auto mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
                :class="{ hidden: state.hideMobileMenu }"
            >
                <ul class="lg:flex justify-end flex-1 items-center">
                    <li class="lg:mr-3">
                        <router-link
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/en"
                            v-show="$route.params.lang == 'en'"
                            >Home</router-link
                        >
                        <router-link
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/jp"
                            v-show="$route.params.lang == 'jp'"
                            >ホーム</router-link
                        >
                    </li>
                    <li class="lg:mr-3 group inline-block">
                        <button
                            class="flex items-center px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white cursor-default focus:outline-none"
                        >
                            <span
                                v-show="$route.params.lang == 'en'"
                                class="mr-2"
                                >Services</span
                            >
                            <span
                                v-show="$route.params.lang == 'jp'"
                                class="mr-2"
                                >サービス内容</span
                            >
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
                            class="lg:absolute pt-1 hidden group-hover:block lg:text-xl text-md tracking-normal bg-white lg:rounded-lg"
                        >
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                to="/tours/en"
                                >Tours</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'jp'"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                to="/tours/jp"
                                >ツアー</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                to="/translation/en"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >Translation</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'jp'"
                                to="/translation/jp"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                            >
                                翻訳・通訳</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                to="/original_brand/en"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >Original Brand</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'jp'"
                                to="/original_brand/jp"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >オリジナル商品</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                to="/events_research/en"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >Events & Research</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'jp'"
                                to="/events_research/jp"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >イベント・調査サポート</router-link
                            >
                        </div>
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            v-show="$route.params.lang == 'en'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/gallery/en"
                            >Gallery</router-link
                        >
                        <router-link
                            v-show="$route.params.lang == 'jp'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/gallery/jp"
                            >ギャラリー</router-link
                        >
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            v-show="$route.params.lang == 'en'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/contact/en"
                            >Contact</router-link
                        >
                        <router-link
                            v-show="$route.params.lang == 'jp'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/contact/jp"
                            >問い合わせ</router-link
                        >
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            v-show="$route.params.lang == 'en'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/about/en"
                            >About</router-link
                        >
                        <router-link
                            v-show="$route.params.lang == 'jp'"
                            class="inline-block px-4 py-2 lg:border-2 lg:rounded-full lg:border-primary lg:hover:bg-primary lg:hover:text-white"
                            to="/about/jp"
                            >会社案内</router-link
                        >
                    </li>
                    <li class="lg:mr-3">
                        <button
                            class="px-4 py-2 lg:hover:text-primary focus:outline-none text-lg"
                        >
                            <router-link
                                v-show="$route.params.lang == 'jp'"
                                :to="$route.fullPath.slice(0, -2) + 'en'"
                                class="mr-2"
                                >English</router-link
                            >
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                :to="$route.fullPath.slice(0, -2) + 'jp'"
                                class="mr-2"
                                >日本人</router-link
                            >
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border-b border-gray-200 opacity-25 my-0 py-0" />
    </nav>
</template>

<script>
import { onMounted, reactive } from "vue";

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
li .router-link-exact-active {
    background-color: #cb3233;
    color: white;
}
</style>
