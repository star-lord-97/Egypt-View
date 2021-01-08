<template>
    <button
        class="bg-primary text-white rounded-lg p-1 m-1 focus:outline-none"
        @click="state.showModal = true"
    >
        {{
            $route.params.lang == "en"
                ? "Add a new product"
                : "新製品を追加する"
        }}
    </button>
    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-0 left-0 w-full h-full flex items-center"
        v-show="state.showModal"
    >
        <div class="container mx-auto rounded-lg bg-white">
            <div class="relative">
                <button
                    class="absolute top-0 right-3 text-2xl hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showModal = false"
                >
                    &times;
                </button>
            </div>
            <div class="w-full flex flex-col justify-center text-center">
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Title:" : "題名：" }}
                </h1>
                <input
                    type="text"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto"
                    v-model="state.newProduct.title"
                />
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.title"
                    >{{ state.errors.title[0] }}</span
                >
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Price:" : "価格：" }}
                </h1>
                <input
                    type="text"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto"
                    v-model="state.newProduct.price"
                />
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.price"
                    >{{ state.errors.price[0] }}</span
                >
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Details:" : "詳細：" }}
                </h1>
                <textarea
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto h-60"
                    v-model="state.newProduct.details"
                ></textarea>
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.details"
                    >{{ state.errors.details[0] }}</span
                >
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Image:" : "画像" }}
                </h1>
                <input
                    id="productImage"
                    name="productImage"
                    type="file"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto"
                    @change="imageUploaded"
                />
                <img
                    class="my-2 w-24 mx-auto"
                    v-if="state.imageURL"
                    :src="state.imageURL"
                />
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.images"
                    >{{ state.errors.images[0] }}</span
                >
            </div>
            <div class="container mx-auto flex justify-center">
                <button
                    class="bg-primary text-white rounded-lg p-1 my-1 focus:outline-none"
                    @click="createProduct()"
                >
                    {{ $route.params.lang == "en" ? "Create" : "作成する" }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();

        const state = reactive({
            showModal: false,
            newProduct: {
                title: "",
                price: "",
                details: "",
                image: "",
            },
            imageURL: "",
            errors: [],
        });

        let createProduct = () => {
            const newProductFormData = new FormData();
            newProductFormData.append("title", state.newProduct.title);
            newProductFormData.append("details", state.newProduct.details);
            newProductFormData.append("price", state.newProduct.price);
            newProductFormData.append("image", state.newProduct.image);

            store
                .dispatch("createProduct", {
                    product: newProductFormData,
                })
                .then((response) => {
                    router.push({
                        path: "/original_brand/" + route.params.lang,
                    });
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors;
                    }
                });
        };

        let imageUploaded = (event) => {
            state.newProduct.image = event.target.files[0];
            state.imageURL = URL.createObjectURL(event.target.files[0]);
        };

        return { state, createProduct, imageUploaded };
    },
};
</script>

<style></style>
