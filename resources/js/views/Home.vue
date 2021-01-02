<template>
    <div class="bg-white">
        <HomeHero />
        <section class="border-b py-16">
            <div class="container max-w-7xl mx-auto m-8">
                <h1
                    class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
                >
                    {{
                        $route.params.lang == "en"
                            ? "Services we provide"
                            : "私たちが提供するサービス"
                    }}
                </h1>
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
