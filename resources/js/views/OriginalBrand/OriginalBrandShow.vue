<template>
    <div class="pt-28 w-3/5 mx-auto">
        <div class="lg:flex justify-around my-8">
            <div>
                <div>
                    <img
                        v-show="state.currentImageSource"
                        :src="'/storage/' + state.currentImageSource"
                        width="500"
                    />
                </div>
                <div class="flex flex-row justify-around">
                    <button
                        v-for="image in state.product.product_images"
                        @click="state.currentImageSource = image.path"
                        class="my-auto py-2 focus:outline-none"
                    >
                        <img
                            :src="'/storage/' + image.path"
                            class="object-cover lg:w-32 lg:h-32 w-12 h-12"
                        />
                    </button>
                </div>
            </div>
            <div class="my-8">
                <span class="text-3xl text-center">{{
                    state.product.title
                }}</span>
                <span class="block text-gray-500 text-lg my-4 text-center">
                    {{ state.product.price }} EGP
                </span>
            </div>
        </div>
        <div>
            <h1
                class="text-xl font-extrabold font-opensans border-b border-primary inline"
            >
                Product details:
            </h1>
            <p class="my-4 text-xl leading-10 text-right">
                {{ state.product.details }}
            </p>
            <h1
                class="text-xl font-extrabold font-opensans underline my-8 text-center"
            >
                For orders and inquiries please whatsapp us on +201117666373
            </h1>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { onBeforeMount, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const state = reactive({
            product: {},
            currentImageSource: null,
        });

        onBeforeMount(() => {
            axios
                .get(
                    "http://localhost:8000/api/products/" + useRoute().params.id
                )
                .then((response) => {
                    state.product = response.data;
                    state.currentImageSource =
                        state.product.primary_product_images[0].path;
                });
        });

        return { state };
    },
};
</script>

<style></style>
