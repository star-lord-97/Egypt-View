<template>
    <div
        class="pt-28 container px-3 mx-auto flex flex-wrap flex-col lg:flex-row items-center"
    >
        <div
            class="flex flex-col w-full lg:w-2/5 justify-center items-start text-center lg:text-left"
        >
            <h1 class="my-4 text-5xl font-bold leading-tight">
                {{
                    $route.params.lang == "en"
                        ? "Welcome to Egypt-View!"
                        : "エジプトビューへようこそ！"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "A TOURISM AND CONSULTING COMPANY BASED IN EGYPT AND JAPAN."
                        : "エジプトと日本を観光とコンサルティングで結ぶ会社"
                }}
            </p>
            <router-link
                class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
                :to="'/about/' + $route.params.lang"
            >
                {{
                    $route.params.lang == "en"
                        ? "Learn More About Us"
                        : "私たちについてもっと知る"
                }}
            </router-link>
        </div>
        <div class="w-full lg:w-3/5 py-6 object-cover">
            <img class="w-full z-50" src="/img/hero.jpg" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
