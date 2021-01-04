<template>
    <div
        class="pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{
                    $route.params.lang == "en"
                        ? "about us"
                        : "人と人をつなげたい"
                }}
            </h1>
            <h1 class="my-4 text-4xl leading-tight font-bold">
                {{
                    $route.params.lang == "en"
                        ? "Welcome to Egypt View!"
                        : "エジプトビューへようこそ！"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "A tourism and consulting company based in Egypt and Japan; A co-managed company of Japanese and Egyptian, with the aim of supporting customers who are confused by different cultures and customs in Egypt and Japan."
                        : "エジプトと日本をビジネス拠点にする、観光とコンサルティングの会社です。 エジプトと日本の異なる文化や習慣で戸惑うお客様サポートを心がけた、日本人とエジプト人の共同運営の会社です。"
                }}
            </p>
            <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Supporting Egyptian tourism, living in Egypt.Academic investigation, coverage permission application and support."
                            : "エジプト観光、在住、起業のご相談と手配、サポート。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Support for Japanese overseas students and Egyptian overseas students."
                            : "翻訳、通訳派遣。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Proxy purchase and import / export consultation etc."
                            : "学術調査、企業視察の許可申請とサポート。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Experienced Japanese and Egyptian staff will respond."
                            : "日本人留学生と、エジプト人留学生のサポート。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Translation, interpreter dispatch."
                            : "代理購入、輸出入相談など。 経験豊かな日本人とエジプト人が対応します。"
                    }}
                </li>
            </ul>
        </div>

        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{ $route.params.lang == "en" ? "MISSION" : "ミッション" }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "To deliver Egypt untraditional tours, requested services consultations smoothly for all Japanese."
                        : "日本人の皆さんにご満足いただける、エジプト旅行と滞在のサポートをします。"
                }}
            </p>
        </div>

        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{ $route.params.lang == "en" ? "VISION" : "ビジョン" }}
            </h1>
            <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "Providing a service that allows many tourists to enjoy and experience the world-class Egyptian heritage."
                            : "世界に誇るエジプトの遺産を多くの観光客に楽しんで体感してもらえるサービスの提供。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "A proposal for social activities that will allow Egyptian heritage to be left in the future."
                            : "エジプトの遺産を未来に残せるようにしていく社会的活動の提案。"
                    }}
                </li>
                <li>
                    {{
                        $route.params.lang == "en"
                            ? "We build up that small joy leads to big future."
                            : "小さな喜びが大きな未来につながることを積み上げていく。"
                    }}
                </li>
            </ul>
        </div>

        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{
                    $route.params.lang == "en"
                        ? "VALIDATION NUMBERS"
                        : "検証番号"
                }}
            </h1>
            <p class="leading-normal text-2xl mb-8">
                {{
                    $route.params.lang == "en"
                        ? "Company Identity Number"
                        : "コーポレートアイデンティティ番号"
                }}: 410566209
                <br />
                {{
                    $route.params.lang == "en"
                        ? "Company Registration Number"
                        : "会社登録番号"
                }}: 20255
            </p>
        </div>

        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{
                    $route.params.lang == "en"
                        ? "Meet our team"
                        : "チームメンバー"
                }}
            </h1>
            <HekmatShimadzuCard />
        </div>
    </div>
</template>

<script>
import HekmatShimadzuCard from "../components/HekmatShimadzuCard";
export default {
    components: { HekmatShimadzuCard },
};
</script>

<style></style>
