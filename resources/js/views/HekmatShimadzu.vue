<template>
    <div
        class="pt-20 lg:pt-28 flex-col w-full text-left container px-3 mx-auto flex justify-center items-left font-opensans bg-white divide-y-2 divide-primary divide"
    >
        <div class="py-4">
            <h1
                class="my-4 text-4xl leading-tight font-extrabold text-primary uppercase text-center"
            >
                {{
                    $route.params.lang == "en"
                        ? "about founder"
                        : "創業メンバー"
                }}
            </h1>
            <div class="lg:grid grid-cols-3 gap-4">
                <div class="lg:col-span-2 container text-left pb-4 my-auto">
                    <h1
                        class="my-4 text-4xl leading-tight font-extrabold text-center"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "Hekmat SHIMADZU"
                                : "嶋津ヘクマット"
                        }}
                    </h1>
                    <h1
                        class="my-4 text-xl leading-tight font-extrabold text-center"
                    >
                        {{ $route.params.lang == "en" ? "Japanese" : "日本人" }}
                    </h1>
                </div>
                <div class="container text-left pb-4">
                    <img src="/img/hekmat_shimadzu.jpg" />
                </div>
            </div>
            <div class="py-4">
                <h1 class="my-4 text-3xl leading-tight font-bold uppercase">
                    {{
                        $route.params.lang == "en"
                            ? "WORK EXPERIENCE:"
                            : "実務経験："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "In Japan, assistant teacher of the human resources development department of a foreign company."
                                : "日本では、外資系などの人事部、人材開発系部門のアシスタントをしてきた。"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Assisted cultural and research people at universities and research institutes."
                                : "文化団体や芸術家、大学の教授アシスタント。"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Egypt Air travel department KARNAK Japanese branch affiliated local staff."
                                : "エジプト航空直営旅行代理店カルナック日本支社のカイロ本社地上スタッフとして勤務。"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "For over 20 years, I have been working in support of people in all fields."
                                : "20年以上にわたり、多くの業界でのアシスタント、サポート業務に従事。"
                        }}
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h1 class="my-4 text-3xl leading-tight font-bold uppercase">
                    {{ $route.params.lang == "en" ? "EDUCATION:" : "学歴：" }}
                </h1>
                <h1 class="pl-4 my-4 text-xl leading-tight font-bold">
                    {{
                        $route.params.lang == "en"
                            ? "Nihon University:"
                            : "日本大学："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Graduate School of Arts and Sciences Department of History"
                                : "日本大学文理学部史学科卒"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Assisted cultural and research people at universities and research institutes."
                                : "文化団体や芸術家、大学の教授アシスタント。"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Egypt Air travel department KARNAK Japanese branch affiliated local staff."
                                : "エジプト航空直営旅行代理店カルナック日本支社のカイロ本社地上スタッフとして勤務。"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "For over 20 years, I have been working in support of people in all fields."
                                : "20年以上にわたり、多くの業界でのアシスタント、サポート業務に従事。"
                        }}
                    </li>
                </ul>
                <h1 class="pl-4 my-4 text-xl leading-tight font-bold">
                    {{
                        $route.params.lang == "en"
                            ? "Waseda University:"
                            : "早稲田大学："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Open College Permanent Member."
                                : "オープンカレッジ永久会員"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Ancient Egypt course."
                                : "古代エジプト関連講座に学ぶ"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Learn ancient Egyptian history, hieroglyphs, Arabic etc."
                                : "古代エジプト史、ヒエログリフ、アラビア語など"
                        }}
                    </li>
                </ul>
                <h1 class="pl-4 my-4 text-xl leading-tight font-bold">
                    GIA JAPAN:
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Tokyo school Paul grading course completion."
                                : "GIA東京校パールグレーディングコース修了"
                        }}
                    </li>
                    <li>
                        {{
                            $route.params.lang == "en"
                                ? "Pearl grading diploma."
                                : "パールグレーディング ディプロマ"
                        }}
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h1 class="my-4 text-3xl leading-tight font-bold uppercase">
                    {{
                        $route.params.lang == "en" ? "ARTICLES:" : "執筆記事："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        <a
                            target="_blank"
                            href="https://taptrip.jp/writer/714/"
                            class="hover:underline"
                        >
                            TapTrip
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://tabinaka.co.jp/magazine/articles/author/tie_shimadu"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "Tabinaka magazine"
                                    : "タビナカマガジン"
                            }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h1 class="my-4 text-3xl leading-tight font-bold uppercase">
                    {{
                        $route.params.lang == "en"
                            ? "WEBSITES:"
                            : "ウェブサイト："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        <a
                            target="_blank"
                            href="http://ameblo.jp/greenwood-bluemoon"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "エジプト旅行かばん (Japanese)"
                                    : "エジプト旅行かばん (日本語)"
                            }}
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="http://world-walker.jugem.jp/"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "World Walker (English)"
                                    : "地球散歩（英語版）"
                            }}
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="http://blog.goo.ne.jp/pinacordoba"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "World Walker (Japanese)"
                                    : "地球散歩（日本語）"
                            }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h1 class="my-4 text-3xl leading-tight font-bold uppercase">
                    {{
                        $route.params.lang == "en"
                            ? "COVERAGE ARTICLES:"
                            : "インタビュー記事："
                    }}
                </h1>
                <ul class="list-disc my-4 lg:pl-16 pl-8 text-red-400">
                    <li>
                        <a
                            target="_blank"
                            href="https://traveloco.jp/loco/hekmat_sofia/interview"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "Travel web magazine I"
                                    : "トラベロコ　インタビュー記事　その1"
                            }}
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://blog.traveloco.jp/interview-20180802/"
                            class="hover:underline"
                        >
                            {{
                                $route.params.lang == "en"
                                    ? "Travel web magazine II"
                                    : "トラベロコ　インタビュー記事　その2"
                            }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
