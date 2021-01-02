<template>
    <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                :to="'/tours/' + $route.params.lang"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                {{ $route.params.lang == "en" ? "tours" : "ツアー" }}
            </router-link>
            <p class="text-gray-600 mb-8">
                {{
                    $route.params.lang == "en"
                        ? "We can organize any tour from Japan and Egypt international airports."
                        : "私たちは日本とエジプトの国際空港発着のあらゆるツアーを組むことが可能です."
                }}
                <br /><br />
                {{
                    $route.params.lang == "en"
                        ? "For more information"
                        : "詳細については."
                }}
                <router-link
                    class="text-orange-500 underline"
                    :to="'/tours/' + $route.params.lang"
                >
                    {{
                        $route.params.lang == "en"
                            ? "Click here"
                            : "ここをクリック."
                    }}
                </router-link>
            </p>
        </div>
        <router-link
            :to="'/tours/' + $route.params.lang"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/tours.jpg" class="rounded-lg" />
        </router-link>
    </div>

    <div class="flex flex-wrap">
        <router-link
            :to="'/translation/' + $route.params.lang"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/interpretations.jpg" class="rounded-lg" />
        </router-link>
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                :to="'/translation/' + $route.params.lang"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                {{
                    $route.params.lang == "en"
                        ? "interpretations"
                        : "翻訳・通訳"
                }}
            </router-link>
            <p class="text-gray-600 mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Interpreting, translating, guiding, cultural mutual understanding support."
                        : "通訳・翻訳・ガイド・文化相互理解サポート."
                }}
                <br /><br />
                {{
                    $route.params.lang == "en"
                        ? "For more information"
                        : "詳細については."
                }}
                <router-link
                    class="text-orange-500 underline"
                    :to="'/translation/' + $route.params.lang"
                >
                    {{
                        $route.params.lang == "en"
                            ? "Click here"
                            : "ここをクリック."
                    }}
                </router-link>
            </p>
        </div>
    </div>

    <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                :to="'/events_research/' + $route.params.lang"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                {{
                    $route.params.lang == "en"
                        ? "events & research"
                        : "イベント・調査サポート"
                }}
            </router-link>
            <p class="text-gray-600 mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Dispatched staff from event venue arrangements. Comprehensive support such as catering."
                        : "各種イベントの会場手配トスタッフ派遣."
                }}
                <br /><br />
                {{
                    $route.params.lang == "en"
                        ? "For more information"
                        : "詳細については."
                }}
                <router-link
                    class="text-orange-500 underline"
                    :to="'/events_research/' + $route.params.lang"
                >
                    {{
                        $route.params.lang == "en"
                            ? "Click here"
                            : "ここをクリック."
                    }}
                </router-link>
            </p>
        </div>
        <router-link
            :to="'/events_research/' + $route.params.lang"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/events_research.jpg" class="rounded-lg" />
        </router-link>
    </div>

    <div class="flex flex-wrap">
        <router-link
            :to="'/original_brand/' + $route.params.lang"
            class="w-full sm:w-1/2 p-6"
        >
            <img src="/img/original_brand.png" class="rounded-lg" />
        </router-link>
        <div class="w-5/6 sm:w-1/2 p-6">
            <router-link
                :to="'/original_brand/' + $route.params.lang"
                class="text-3xl text-gray-800 font-bold leading-none mb-3 uppercase"
            >
                {{
                    $route.params.lang == "en" ? "souvenirs" : "オリジナル商品"
                }}
            </router-link>
            <p class="text-gray-600 mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Browse a collection of great merchandise at our own store."
                        : "私たちの店で素晴らしい商品のコレクションを閲覧する."
                }}
                <br /><br />
                {{
                    $route.params.lang == "en"
                        ? "For more information"
                        : "詳細については."
                }}
                <router-link
                    class="text-orange-500 underline"
                    :to="'/original_brand/' + $route.params.lang"
                >
                    {{
                        $route.params.lang == "en"
                            ? "Click here"
                            : "ここをクリック."
                    }}
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
