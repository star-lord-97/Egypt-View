<template>
    <div
        class="pt-28 flex-col w-full text-center container mx-auto flex justify-center items-center bg-white"
    >
        <h1
            class="my-4 text-4xl leading-tight uppercase pb-16 font-opensans font-bold"
        >
            {{
                $route.params.lang == "en"
                    ? "PHOTOS FROM OUR PREVIOUS JOURNEYS ALL OVER EGYPT"
                    : "エジプト各地の写真"
            }}
        </h1>
    </div>
    <div
        class="flex-col w-full text-center container mx-auto flex justify-center items-center bg-white"
    >
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{ $route.params.lang == "en" ? "CAIRO" : "カイロ" }}
            </h1>
            <GalleryImages :images="state.cairoImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{ $route.params.lang == "en" ? "LUXOR" : "ルクソール" }}
            </h1>
            <GalleryImages :images="state.luxorImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{
                    $route.params.lang == "en"
                        ? "Abu Simbel temples"
                        : "アブシンベル大神殿"
                }}
            </h1>
            <GalleryImages :images="state.abuSimbelTemplesImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{
                    $route.params.lang == "en"
                        ? "Bahariya Oasis"
                        : "バハレイヤオアシス"
                }}
            </h1>
            <GalleryImages :images="state.bahariyaOasisImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{ $route.params.lang == "en" ? "FAYYOM" : "ファイユーム" }}
            </h1>
            <GalleryImages :images="state.fayyomImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{
                    $route.params.lang == "en"
                        ? "DINNER CRUISE"
                        : "ディナークルーズ"
                }}
            </h1>
            <GalleryImages :images="state.dinnerCruiseImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{ $route.params.lang == "en" ? "HOTEL" : "ホテル" }}
            </h1>
            <GalleryImages :images="state.hotelImages" />
        </div>
        <div>
            <h1 class="my-8 text-xl text-primary leading-tight uppercase">
                {{ $route.params.lang == "en" ? "OTHER PLACES" : "他の場所" }}
            </h1>
            <GalleryImages :images="state.otherPlacesImages" />
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
import GalleryImages from "../components/GalleryImages";

export default {
    components: {
        GalleryImages,
    },

    setup() {
        const state = reactive({
            cairoImages: null,
            luxorImages: null,
            abuSimbelTemplesImages: null,
            bahariyaOasisImages: null,
            fayyomImages: null,
            dinnerCruiseImages: null,
            hotelImages: null,
            otherPlacesImages: null,
        });

        onMounted(() => {
            axios.get("http://localhost:8000/api/gallery_images").then((response) => {
                state.cairoImages = response.data[0];
                state.luxorImages = response.data[1];
                state.abuSimbelTemplesImages = response.data[2];
                state.bahariyaOasisImages = response.data[3];
                state.fayyomImages = response.data[4];
                state.dinnerCruiseImages = response.data[5];
                state.hotelImages = response.data[6];
                state.otherPlacesImages = response.data[7];
            });
        });

        return { state };
    },
};
</script>

<style></style>
