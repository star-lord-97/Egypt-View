<template>
    <div
        class="pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight"
            >
                Events & Fairs
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight"
            >
                イベント＆フェア
            </h1>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-gray-600"
                v-show="$route.params.lang == 'en'"
            >
                <li>Dispatched staff from event venue arrangements.</li>
                <li>Comprehensive support such as catering.</li>
            </ul>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-gray-600"
                v-show="$route.params.lang == 'jp'"
            >
                <li>各種イベントの会場手配トスタッフ派遣</li>
                <li>ケータリングなどの手配も可能</li>
            </ul>
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight"
            >
                Research & Permissions
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight"
            >
                調査や許可申請の代行
            </h1>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                Support researcher’s survey and coverage application; There are
                places in Egypt where foreigners are restricted. Procedures such
                as application of entry permit such as ruins, photography
                permission application. Advance appointments of egypt companies,
                factories and farmers. Attendant on the day of visit,
                interpreter. Support for follow-up surveys after visits.
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                研究者の調査や取材依頼の申請の代行。
                エジプトでは外国人の立ち入りが制限されている場所があります。
                ・遺跡などの入国許可の申請、写真撮影許可申請などの手続き。
                ・エジプト企業、工場および農場などの事前予約。
                見学当日の通訳、アテンドサービス。 ・
                訪問後の追跡調査のサポート。
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
