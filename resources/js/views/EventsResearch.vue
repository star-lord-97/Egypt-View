<template>
    <div
        class="pt-20 lg:pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Events & Fairs"
                        : "イベント＆フェア"
                }}
            </h1>
            <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Dispatched staff from event venue arrangements."
                            : "各種イベントの会場手配トスタッフ派遣"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Comprehensive support such as catering."
                            : "ケータリングなどの手配も可能"
                    }}
                </li>
            </ul>
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Research & Permissions"
                        : "調査や許可申請の代行"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Support researcher's survey and coverage application; There are places in Egypt where foreigners are restricted. Procedures such as application of entry permit such as ruins, photography permission application. Advance appointments of egypt companies, factories and farmers. Attendant on the day of visit, interpreter. Support for follow-up surveys after visits."
                        : "研究者の調査や取材依頼の申請の代行。 エジプトでは外国人の立ち入りが制限されている場所があります。 ・遺跡などの入国許可の申請、写真撮影許可申請などの手続き。 ・エジプト企業、工場および農場などの事前予約。 見学当日の通訳、アテンドサービス。 ・ 訪問後の追跡調査のサポート。"
                }}
            </p>
        </div>
    </div>
    <div
        class="container mx-auto flex justify-center items-start text-center py-10 bg-white"
    >
        <router-link
            class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
            :to="'/contant/' + $route.params.lang"
        >
            {{
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
