<template>
    <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                to="/tours/en"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
                v-show="$route.params.lang == 'en'"
            >
                tours
            </router-link>
            <router-link
                to="/tours/jp"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
                v-show="$route.params.lang == 'jp'"
            >
                ツアー
            </router-link>
            <p v-show="$route.params.lang == 'en'" class="text-gray-600 mb-8">
                We can organize any tour from Japan and Egypt international
                airports.<br /><br />
                For more information
                <router-link class="text-orange-500 underline" to="/tours/en"
                    >Click here</router-link
                >
            </p>
            <p v-show="$route.params.lang == 'jp'" class="text-gray-600 mb-8">
                私たちは日本とエジプトの国際空港発着のあらゆるツアーを組むことが可能です.<br /><br />
                詳細については
                <router-link class="text-orange-500 underline" to="/tours/jp"
                    >ここをクリック</router-link
                >
            </p>
        </div>
        <router-link
            v-show="$route.params.lang == 'en'"
            to="/tours/en"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/tours.jpg" alt="tours" class="rounded-lg" />
        </router-link>
        <router-link
            v-show="$route.params.lang == 'jp'"
            to="/tours/jp"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/tours.jpg" alt="ツアー" class="rounded-lg" />
        </router-link>
    </div>

    <div class="flex flex-wrap">
        <router-link
            v-show="$route.params.lang == 'en'"
            to="/translation/en"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/interpretations.jpg"
                alt="interpretations"
                class="rounded-lg"
            />
        </router-link>
        <router-link
            v-show="$route.params.lang == 'jp'"
            to="/translation/jp"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/interpretations.jpg"
                alt="翻訳・通訳"
                class="rounded-lg"
            />
        </router-link>
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                v-show="$route.params.lang == 'en'"
                to="/translation/en"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                interpretations
            </router-link>
            <router-link
                v-show="$route.params.lang == 'jp'"
                to="/translation/jp"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                翻訳・通訳
            </router-link>
            <p class="text-gray-600 mb-8" v-show="$route.params.lang == 'en'">
                Interpreting, translating, guiding, cultural mutual
                understanding support .<br /><br />
                <router-link
                    class="text-orange-500 underline"
                    to="/translation/en"
                    >Click here</router-link
                >
            </p>
            <p class="text-gray-600 mb-8" v-show="$route.params.lang == 'jp'">
                通訳・翻訳・ガイド・文化相互理解サポート.<br /><br />
                詳細については
                <router-link
                    class="text-orange-500 underline"
                    to="/translation/jp"
                    >ここをクリック</router-link
                >
            </p>
        </div>
    </div>

    <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                v-show="$route.params.lang == 'en'"
                to="/events_research/en"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                events & research
            </router-link>
            <router-link
                v-show="$route.params.lang == 'jp'"
                to="/events_research/jp"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                イベント・調査サポート
            </router-link>
            <p v-show="$route.params.lang == 'en'" class="text-gray-600 mb-8">
                Dispatched staff from event venue arrangements. Comprehensive
                support such as catering.<br /><br />
                For more information
                <router-link
                    class="text-orange-500 underline"
                    to="/events_research/en"
                    >Click here</router-link
                >
            </p>
            <p v-show="$route.params.lang == 'jp'" class="text-gray-600 mb-8">
                各種イベントの会場手配トスタッフ派遣 .
                ケータリングなどの手配も可能 .<br /><br />
                詳細については
                <router-link
                    class="text-orange-500 underline"
                    to="/events_research/jp"
                    >ここをクリック</router-link
                >
            </p>
        </div>
        <router-link
            v-show="$route.params.lang == 'en'"
            to="/events_research/en"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/events_research.jpg"
                alt="events_research"
                class="rounded-lg"
            />
        </router-link>
        <router-link
            v-show="$route.params.lang == 'jp'"
            to="/events_research/jp"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/events_research.jpg"
                alt="イベント・調査サポート"
                class="rounded-lg"
            />
        </router-link>
    </div>

    <div class="flex flex-wrap">
        <router-link
            v-show="$route.params.lang == 'en'"
            to="/original_brand/en"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/original_brand.png"
                alt="original_brand"
                class="rounded-lg"
            />
        </router-link>
        <router-link
            v-show="$route.params.lang == 'jp'"
            to="/original_brand/jp"
            class="w-full sm:w-1/2 p-6"
        >
            <img
                src="/img/original_brand.png"
                alt="オリジナル商品"
                class="rounded-lg"
            />
        </router-link>
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                v-show="$route.params.lang == 'en'"
                to="/original_brand/en"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                souvenirs
            </router-link>
            <router-link
                v-show="$route.params.lang == 'jp'"
                to="/original_brand/jp"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                オリジナル商品
            </router-link>
            <p v-show="$route.params.lang == 'en'" class="text-gray-600 mb-8">
                Browse a collection of great merchandise at our own store.<br /><br />
                For more information
                <router-link
                    class="text-orange-500 underline"
                    to="/original_brand/en"
                    >Click here</router-link
                >
            </p>
            <p v-show="$route.params.lang == 'jp'" class="text-gray-600 mb-8">
                私たちの店で素晴らしい商品のコレクションを閲覧する.<br /><br />
                詳細については
                <router-link
                    class="text-orange-500 underline"
                    to="/original_brand/jp"
                    >ここをクリック</router-link
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
