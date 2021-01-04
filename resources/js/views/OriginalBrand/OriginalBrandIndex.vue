<template>
    <div class="pt-28 w-3/5 mx-auto">
        <div class="lg:grid grid-cols-3 gap-4 my-8">
            <router-link
                v-for="product in state.products"
                :to="'/original_brand/' + product.id + '/' + $route.params.lang"
                class="bg-white rounded shadow-md hover:shadow-lg"
            >
                <img
                    class="w-full h-96 object-cover"
                    :src="'/storage/' + product.primary_product_images[0].path"
                />
                <div class="m-4 text-center">
                    <span class="text-2xl">{{ product.title }}</span>
                    <span class="block text-gray-500 text-lg">
                        {{ product.price }} EGP
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";

export default {
    setup() {
        const state = reactive({
            products: [],
        });

        onMounted(() => {
            axios.get("http://localhost:8000/api/products").then((response) => {
                state.products = response.data;
            });
        });

        return { state };
    },
};
</script>

<style></style>
