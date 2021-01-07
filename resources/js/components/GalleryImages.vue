<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-8 mx-2">
        <div
            class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg object-fill cursor-pointer"
            v-for="image in images"
            @click="
                handleModalShowing(
                    '/img/' + image.place + '/' + image.source + '.jpg'
                )
            "
        >
            <img
                class="w-full h-full"
                :src="'/img/' + image.place + '/' + image.source + '.jpg'"
                @click="state.showModal = true"
            />
        </div>
    </div>
    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-10 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
        v-show="state.showModal"
    >
        <div
            class="relative container mx-auto lg:px-32 rounded-lg overflow-y-auto bg-white"
        >
            <div class="flex absolute justify-end right-10 pr-4 pt-2">
                <button
                    class="text-3xl leading-none hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showModal = false"
                >
                    &times;
                </button>
            </div>
            <div>
                <img :src="state.imageInModal" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    props: ["images"],

    setup() {
        const state = reactive({
            showModal: false,
            imageInModal: null,
        });

        let handleModalShowing = (image) => {
            state.showModal = true;
            state.imageInModal = image;
        };

        return { state, handleModalShowing };
    },
};
</script>

<style></style>
