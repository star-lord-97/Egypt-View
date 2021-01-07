<template>
    <div
        class="pt-20 lg:pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "International arrangement and personal travel"
                        : "国際線手配と個人旅行"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "We can organize any tour from Japan and Egypt international airports including:"
                        : "私たちは日本とエジプトの国際空港発着のあらゆるツアーを組むことが可能です。"
                }}
            </p>
            <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Custom-made tour from/to Japan."
                            : "日本発着でのオーダーメイドツアー"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Custom-made tour from/to Egypt."
                            : "エジプト発着でのオーダーメイドツアー"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Custom-made tours from/to Egypt; including Cairo, Luxor and Hurghada."
                            : "カイロ、ルクソール、ハルガダなどエジプト国内の国際航空発着でのオーダーメイドツアー"
                    }}
                </li>
            </ul>
        </div>
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Airport transfer and visa purchase support"
                        : "空港送迎とビザ購入サポート"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "At our airport transfer, we pick you up from the immigration gate. We will assist you in purchasing entry visas, filling in entry cards, and cashing. Staff will guide you to the transfer car to the hotel."
                        : "当社の空港送迎では、入国審査ゲートより手前にお迎えに行きます。 入国ビザ購入、入国カードの記入、換金などのお手伝いをします。 ホテルまでの送迎車までスタッフが誘導します。 このようなハイクラスの送迎以外にも、ご予算に合わせた送迎をご提案可能です。"
                }}
            </p>
        </div>
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Nile Cruise, Lake Nasser Cruise Arrangement"
                        : "ナイル川クルーズ、ナセル湖クルーズの手配"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Choose from the wide selection of cruise ships to suit your budget and schedule."
                        : "ご予算と予定に合わせて、数あるクルーズ船の中からお客様に最適のクルーズをチョイスします。"
                }}
            </p>
        </div>
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Model plans for domestic arrivals and departures:"
                        : "国内発着のモデルプラン"
                }}
            </h1>
            <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Grand course for sightseeing in Egypt, such as the Great Temple of Abu Simbel, the Valley of the Kings of Luxor, and the Great Pyramid of Giza."
                            : "アブシンベル大神殿からルクソールの王家の谷、ギザの大ピラミッドなど、エジプト観光の王道コース。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Travel around Islamic mosques and Christian churches."
                            : "イスラーム時代のモスクやキリスト教教会を巡る旅。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Diving tours at the Red Sea Resort, Sharm al-Sheikh and Hurghada."
                            : "紅海リゾート、シャルム・アル・シェイクやハルガダでのダイビングツアー。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Tour to enjoy Roman ruins and Mediterranean seafood in Alexandria."
                            : "地中海のローマ遺跡とシーフードを堪能するツアー。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Bahareya oasis, Siwa oasis and other desert tours."
                            : "バハレイヤオアシス、シーワオアシスなど砂漠ツアー。"
                    }}
                </li>
            </ul>
        </div>
        <div class="py-4">
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Maniac course advice and attendance"
                        : "マニアックなコースのアドバイスとアテンド"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Staff who have studied Egyptian archeology can arrange sightseeing at archaeological sites and museums throughout Egypt."
                        : "エジプト考古学を学んだスタッフが、エジプト全土の遺跡や博物館への観光手配をします。"
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
