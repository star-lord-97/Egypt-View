<template>
    <div
        class="pt-20 lg:pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Interpreting, translating, guiding, cultural mutual understanding support"
                        : "通訳・翻訳・ガイド・文化相互理解サポート"
                }}
            </h1>
            <ul class="list-disc lg:pl-16 pl-8 text-red-400 py-4">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Japanese / English guide"
                            : "・日本語/英語ガイド"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Japanese / English interpreter"
                            : "日本語/英語通訳"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Japanese / English translation"
                            : "日本語/英語翻訳"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Japanese support in Egypt"
                            : "・エジプトでの日本人によるサポート"
                    }}
                </li>
            </ul>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Dispatch of interpreters and guides to Egypt and neighboring countries. Support for culture shock and daily life in which Japanese living in Egypt and Egyptians going in Japan fall."
                        : "エジプト国内および近隣国にも通訳、ガイドの出張派遣。 エジプトに住む日本人と、日本に行くエジプト人が陥るカルチャーショックや日常生活のサポート。"
                }}
            </p>
        </div>
    </div>
    <div
        class="container mx-auto flex justify-center items-start text-center py-10 bg-white"
    >
        <router-link
            class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
            :to="'/contact/' + $route.params.lang"
            >{{
                $route.params.lang == "en"
                    ? "Contact Us for more information"
                    : "ご質問やご要望はお問い合わせください"
            }}
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
