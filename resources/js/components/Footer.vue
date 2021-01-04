<template>
    <footer class="bg-white border-t-4 border-primary">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6">
                    <router-link
                        :to="'/' + $route.params.lang"
                        class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    >
                        <img src="/img/logo.png" width="140" class="mx-auto" />
                    </router-link>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">
                        {{
                            $route.params.lang == "en" ? "Social" : "ソーシャル"
                        }}
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="https://www.facebook.com/Egypt.View.tourism/"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Facebook"
                                        : "フェイスブック"
                                }}
                            </a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="https://twitter.com/egypt_view"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Twitter"
                                        : "ツイッター"
                                }}
                            </a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="mailto:info@egypt-view.com"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Mail"
                                        : "郵便物"
                                }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">
                        {{ $route.params.lang == "en" ? "Company" : "会社" }}
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <router-link
                                :to="'/about/' + $route.params.lang"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >{{
                                    $route.params.lang == "en"
                                        ? "About Us"
                                        : "私たちに関しては"
                                }}
                            </router-link>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <router-link
                                :to="'/contact/' + $route.params.lang"
                                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >{{
                                    $route.params.lang == "en"
                                        ? "Contact"
                                        : "連絡先"
                                }}
                            </router-link>
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
