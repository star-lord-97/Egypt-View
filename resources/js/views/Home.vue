<template>
    <div class="bg-white">
        <HomeHero />
        <section class="border-b py-16">
            <div class="container max-w-7xl mx-auto m-8">
                <h1
                    v-show="$route.params.lang == 'en'"
                    class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
                >
                    Services we provide
                </h1>
                <h1
                    v-show="$route.params.lang == 'jp'"
                    class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
                >
                    私たちが提供するサービス
                </h1>
                <div class="w-full mb-4">
                    <div
                        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                    ></div>
                </div>

                <HomeServices />
            </div>
        </section>
    </div>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeServices from "../components/HomeServices";

export default {
    components: {
        HomeHero,
        HomeServices,
    },
};
</script>

<style scoped></style>
