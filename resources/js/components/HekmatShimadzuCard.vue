<template>
    <div class="p-4 bg-white border border-primary">
        <h1 class="text-4xl leading-tight font-bold uppercase">
            {{
                $route.params.lang == "en"
                    ? "hekmat shimadzu"
                    : "エジプトビューへようこそ！"
            }}
        </h1>
        <h1
            class="text-xl text-gray-300 tracking-wide leading-tight font-bold uppercase"
        >
            {{
                $route.params.lang == "en"
                    ? "CO OWNER & MANAGING DIRECTOR"
                    : "エジプトビューへようこそ！"
            }}
        </h1>
        <p class="leading-normal text-2xl m-4">
            {{
                $route.params.lang == "en"
                    ? "In Japan, assistant teacher of the human resources development department of a foreign company. Assisted cultural and research people at universities and research institutes. Egypt Air travel department KARNAK Japanese branch affiliated local staff. For over 20 years, I have been working in support of people in all fields."
                    : "ヘクマットは日本名の「ちえ」のエジプト名前。エジプトでかつて大ヒットしたドラマ「ちえ校長先生（Abra Hekmat)」になぞらえ、研究者などのサポートをしている私をヘクマットと呼ぶエジプト人が多い。 かつては外資系、大手企業の人事部、人材開発部の社員教育部門のサポート。 現在は、 以前から続けている大学や研究機関で文化人や研究者のアシスタント業務を継続。 エジプト航空直営旅行代理店KARNAK日本支社の現地スタッフとして旅行者をサポート。 20年以上にわたり、あらゆる分野の人々のニーズを受けたサポートとアシスト業務に従事している。"
            }}
        </p>
        <div
            class="container mx-auto flex justify-center items-start text-center bg-white"
        >
            <router-link
                class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full p-4 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out"
                :to="'/team/hekmat_shimadzu/' + $route.params.lang"
            >
                {{
                    $route.params.lang == "en"
                        ? "Read more >>>"
                        : "もっと読む >>>"
                }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
