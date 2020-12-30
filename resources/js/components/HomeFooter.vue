<template>
    <footer class="bg-white">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6">
                    <router-link
                        v-show="$route.params.lang == 'en'"
                        to="/en"
                        class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    >
                        <img src="/img/logo.png" width="140" class="mx-auto" />
                    </router-link>
                    <router-link
                        v-show="$route.params.lang == 'jp'"
                        to="/jp"
                        class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    >
                        <img src="/img/logo.png" width="140" class="mx-auto" />
                    </router-link>
                </div>
                <div class="flex-1">
                    <p
                        v-show="$route.params.lang == 'en'"
                        class="uppercase text-gray-500 md:mb-6"
                    >
                        Social
                    </p>
                    <p
                        v-show="$route.params.lang == 'jp'"
                        class="uppercase text-gray-500 md:mb-6"
                    >
                        ソーシャル
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="https://www.facebook.com/Egypt.View.tourism/"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                v-show="$route.params.lang == 'en'"
                                >Facebook</a
                            >
                            <a
                                href="https://www.facebook.com/Egypt.View.tourism/"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                v-show="$route.params.lang == 'jp'"
                                >フェイスブック</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                v-show="$route.params.lang == 'en'"
                                href="https://twitter.com/egypt_view"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Twitter</a
                            >
                            <a
                                v-show="$route.params.lang == 'jp'"
                                href="https://twitter.com/egypt_view"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >ツイッター</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="mailto:info@egypt-view.com"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                v-show="$route.params.lang == 'en'"
                                >Mail</a
                            >
                            <a
                                href="mailto:info@egypt-view.com"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                v-show="$route.params.lang == 'jp'"
                                >郵便物</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p
                        v-show="$route.params.lang == 'en'"
                        class="uppercase text-gray-500 md:mb-6"
                    >
                        Company
                    </p>
                    <p
                        v-show="$route.params.lang == 'jp'"
                        class="uppercase text-gray-500 md:mb-6"
                    >
                        会社
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                to="/about/en"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >About Us</router-link
                            >
                            <router-link
                                to="/about/jp"
                                v-show="$route.params.lang == 'jp'"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >私たちに関しては</router-link
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <router-link
                                v-show="$route.params.lang == 'en'"
                                to="/contact/en"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Contact</router-link
                            >
                            <router-link
                                to="/contact/jp"
                                v-show="$route.params.lang == 'jp'"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >連絡先</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style></style>
