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
                    class="font-bold flex items-center"
                    :to="'/' + $route.params.lang"
                >
                    <img
                        src="/img/icon.png"
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
                            class="inline-block px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white"
                            :to="'/' + $route.params.lang"
                            >{{
                                $route.params.lang == "en" ? "Home" : "ホーム"
                            }}
                        </router-link>
                    </li>
                    <li class="lg:mr-3 group inline-block">
                        <button
                            class="flex items-center px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white cursor-default focus:outline-none"
                        >
                            <span class="mr-2"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Services"
                                        : "サービス内容"
                                }}
                            </span>
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
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                :to="'/tours/' + $route.params.lang"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Tours"
                                        : "ツアー"
                                }}
                            </router-link>
                            <router-link
                                :to="'/translation/' + $route.params.lang"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Translation"
                                        : "翻訳・通訳"
                                }}
                            </router-link>
                            <router-link
                                :to="'/original_brand/' + $route.params.lang"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Original Brand"
                                        : "オリジナル商品"
                                }}
                            </router-link>
                            <router-link
                                :to="'/events_research/' + $route.params.lang"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Events & Research"
                                        : "イベント・調査サポート"
                                }}
                            </router-link>
                        </div>
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            class="inline-block px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white"
                            :to="'/gallery/' + $route.params.lang"
                            >{{
                                $route.params.lang == "en"
                                    ? "Gallery"
                                    : "ギャラリー"
                            }}
                        </router-link>
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            class="inline-block px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white"
                            :to="'/contact/' + $route.params.lang"
                            >{{
                                $route.params.lang == "en"
                                    ? "Contact"
                                    : "問い合わせ"
                            }}
                        </router-link>
                    </li>
                    <li class="lg:mr-3">
                        <router-link
                            class="inline-block px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white"
                            :to="'/about/' + $route.params.lang"
                            >{{
                                $route.params.lang == "en"
                                    ? "About"
                                    : "会社案内"
                            }}
                        </router-link>
                    </li>
                    <li v-if="isLoggedIn" class="lg:mr-3 group inline-block">
                        <button
                            class="flex items-center px-4 py-2 lg:rounded-full lg:border-2 border-white lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary lg:bg-primary lg:text-white cursor-default focus:outline-none"
                        >
                            <span class="mr-2"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Admin"
                                        : "管理者"
                                }}
                            </span>
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
                                :to="'/products/' + $route.params.lang"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Products"
                                        : "製品"
                                }}
                            </router-link>
                            <router-link
                                :to="'/messages/' + $route.params.lang"
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Messages"
                                        : "メッセージ"
                                }}
                            </router-link>
                            <button
                                class="lg:flex block lg:justify-center ml-4 lg:ml-0 px-2 lg:py-2 py-0 lg:hover:bg-primary lg:hover:text-white"
                                @click="logOutHandler()"
                            >
                                {{
                                    $route.params.lang == "en"
                                        ? "Logout"
                                        : "ログアウト"
                                }}
                            </button>
                        </div>
                    </li>
                    <li>
                        <button
                            class="px-4 focus:outline-none text-lg font-opensans font-extrabold"
                            :class="{
                                'text-primary': $route.params.lang == 'en',
                            }"
                        >
                            <router-link
                                :to="$route.fullPath.slice(0, -2) + 'en'"
                                class=""
                                >EN</router-link
                            >
                        </button>
                        <button
                            class="px-4 focus:outline-none text-lg font-opensans font-extrabold"
                            :class="{
                                'text-primary': $route.params.lang == 'jp',
                            }"
                        >
                            <router-link
                                :to="$route.fullPath.slice(0, -2) + 'jp'"
                                class=""
                                >JP</router-link
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
import { onMounted, reactive, computed } from "vue";
import store from "../store";

export default {
    setup() {
        const state = reactive({
            hideMobileMenu: true,
        });

        let logOutHandler = () => {
            store
                .dispatch("logout")
                .then((response) => {
                    localStorage.removeItem("adminToken");
                    store.commit("clearAdminToken");
                })
                .catch((error) => {
                    localStorage.removeItem("adminToken");
                    store.commit("clearAdminToken");
                });
        };

        const isLoggedIn = computed(() => {
            return store.getters.isLoggedIn;
        });

        return { state, logOutHandler, isLoggedIn };
    },
};
</script>

<style scoped>
li .router-link-exact-active {
    transform: scale(0.85);
}
</style>
