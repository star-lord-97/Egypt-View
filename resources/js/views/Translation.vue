<template>
    <div
        class="pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight"
            >
                Interpreting, translating, guiding, cultural mutual
                understanding support
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight"
            >
                通訳・翻訳・ガイド・文化相互理解サポート
            </h1>
            <ul
                class="list-disc lg:pl-16 pl-8 text-gray-600 py-4"
                v-show="$route.params.lang == 'en'"
            >
                <li>Japanese / English guide</li>
                <li>Japanese / English interpreter</li>
                <li>Japanese / English translation</li>
                <li>Japanese support in Egypt</li>
            </ul>
            <ul
                class="list-disc lg:pl-16 pl-8 text-gray-600 py-4"
                v-show="$route.params.lang == 'jp'"
            >
                <li>・日本語/英語ガイド</li>
                <li>日本語/英語通訳</li>
                <li>日本語/英語翻訳</li>
                <li>・エジプトでの日本人によるサポート</li>
            </ul>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                Dispatch of interpreters and guides to Egypt and neighboring
                countries. Support for culture shock and daily life in which
                Japanese living in Egypt and Egyptians going in Japan fall.
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                エジプト国内および近隣国にも通訳、ガイドの出張派遣。
                エジプトに住む日本人と、日本に行くエジプト人が陥るカルチャーショックや日常生活のサポート。
            </p>
        </div>
    </div>
    <div
        class="container mx-auto flex justify-center items-start text-center py-10 bg-white"
    >
        <router-link
            class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
            to="/contact/en"
            v-show="$route.params.lang == 'en'"
        >
            Contact Us for more information
        </router-link>
        <router-link
            class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
            to="/contact/jp"
            v-show="$route.params.lang == 'jp'"
        >
            ご質問やご要望はお問い合わせください
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
