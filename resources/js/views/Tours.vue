<template>
    <div
        class="pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                International arrangement and personal travel
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                国際線手配と個人旅行
            </h1>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                We can organize any tour from Japan and Egypt international
                airports including:
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                私たちは日本とエジプトの国際空港発着のあらゆるツアーを組むことが可能です。
            </p>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-red-400"
                v-show="$route.params.lang == 'en'"
            >
                <li>Custom-made tour from/to Japan.</li>
                <li>Custom-made tour from/to Egypt.</li>
                <li>
                    Custom-made tours from/to Egypt; including Cairo, Luxor and
                    Hurghada.
                </li>
            </ul>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-gray-600"
                v-show="$route.params.lang == 'jp'"
            >
                <li>日本発着でのオーダーメイドツアー</li>
                <li>エジプト発着でのオーダーメイドツアー</li>
                <li>
                    カイロ、ルクソール、ハルガダなどエジプト国内の国際航空発着でのオーダーメイドツアー
                </li>
            </ul>
        </div>
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                Airport transfer and visa purchase support
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                空港送迎とビザ購入サポート
            </h1>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                At our airport transfer, we pick you up from the immigration
                gate. We will assist you in purchasing entry visas, filling in
                entry cards, and cashing. Staff will guide you to the transfer
                car to the hotel.
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                当社の空港送迎では、入国審査ゲートより手前にお迎えに行きます。
                入国ビザ購入、入国カードの記入、換金などのお手伝いをします。
                ホテルまでの送迎車までスタッフが誘導します。
                このようなハイクラスの送迎以外にも、ご予算に合わせた送迎をご提案可能です。
            </p>
        </div>
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                Nile Cruise, Lake Nasser Cruise Arrangement
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                ナイル川クルーズ、ナセル湖クルーズの手配
            </h1>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                Choose from the wide selection of cruise ships to suit your
                budget and schedule.
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                ご予算と予定に合わせて、数あるクルーズ船の中からお客様に最適のクルーズをチョイスします。
            </p>
        </div>
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                Model plans for domestic arrivals and departures:
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                国内発着のモデルプラン
            </h1>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-red-400"
                v-show="$route.params.lang == 'en'"
            >
                <li>
                    Grand course for sightseeing in Egypt, such as the Great
                    Temple of Abu Simbel, the Valley of the Kings of Luxor, and
                    the Great Pyramid of Giza.
                </li>
                <li>Travel around Islamic mosques and Christian churches.</li>
                <li>
                    Diving tours at the Red Sea Resort, Sharm al-Sheikh and
                    Hurghada.
                </li>
                <li>
                    Tour to enjoy Roman ruins and Mediterranean seafood in
                    Alexandria.
                </li>
                <li>Bahareya oasis, Siwa oasis and other desert tours.</li>
            </ul>
            <ul
                class="list-disc my-4 lg:pl-16 pl-8 text-gray-600"
                v-show="$route.params.lang == 'jp'"
            >
                <li>
                    アブシンベル大神殿からルクソールの王家の谷、ギザの大ピラミッドなど、エジプト観光の王道コース。
                </li>
                <li>イスラーム時代のモスクやキリスト教教会を巡る旅。</li>
                <li>
                    紅海リゾート、シャルム・アル・シェイクやハルガダでのダイビングツアー。
                </li>
                <li>地中海のローマ遺跡とシーフードを堪能するツアー。</li>
                <li>バハレイヤオアシス、シーワオアシスなど砂漠ツアー。</li>
            </ul>
        </div>
        <div class="py-4">
            <h1
                v-show="$route.params.lang == 'en'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                Maniac course advice and attendance
            </h1>
            <h1
                v-show="$route.params.lang == 'jp'"
                class="my-4 text-4xl leading-tight font-bold"
            >
                マニアックなコースのアドバイスとアテンド
            </h1>
            <p
                v-show="$route.params.lang == 'en'"
                class="leading-normal text-2xl mb-8"
            >
                Staff who have studied Egyptian archeology can arrange
                sightseeing at archaeological sites and museums throughout
                Egypt.
            </p>
            <p
                v-show="$route.params.lang == 'jp'"
                class="leading-normal text-2xl mb-8"
            >
                エジプト考古学を学んだスタッフが、エジプト全土の遺跡や博物館への観光手配をします。
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
