<template>
    <button
        class="bg-green-500 rounded-lg p-1 mx-1 focus:outline-none"
        @click="state.showEditProductModal = true"
    >
        {{ $route.params.lang == "en" ? "Edit Product" : "製品の編集" }}
    </button>
    <button
        class="bg-green-500 rounded-lg p-1 mx-1 focus:outline-none"
        @click="state.showAddImageModal = true"
    >
        {{ $route.params.lang == "en" ? "Add Image" : "画像を追加" }}
    </button>
    <button
        class="bg-green-500 rounded-lg p-1 mx-1 focus:outline-none"
        @click="state.showChoosePrimaryImageModal = true"
    >
        {{
            $route.params.lang == "en"
                ? "Choose Primary Image"
                : "プライマリイメージを選択します"
        }}
    </button>
    <button
        class="bg-red-500 rounded-lg p-1 mx-1 focus:outline-none"
        @click="state.showDeleteProductModal = true"
    >
        {{ $route.params.lang == "en" ? "Delete Product" : "製品を削除する" }}
    </button>

    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-0 left-0 w-full h-full flex items-center"
        v-show="state.showEditProductModal"
    >
        <div class="container mx-auto rounded-lg bg-white">
            <div class="relative">
                <button
                    class="absolute top-0 right-3 text-2xl hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showEditProductModal = false"
                >
                    &times;
                </button>
            </div>
            <div class="w-full flex-col justify-center">
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Title:" : "題名：" }}
                </h1>
                <input
                    type="text"
                    v-model="product.title"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto"
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
                    v-model="product.price"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto"
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
                    v-model="product.details"
                    class="focus:outline-none border-2 border-black text-right w-3/5 mx-auto h-60"
                ></textarea>
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.details"
                    >{{ state.errors.details[0] }}</span
                >
            </div>
            <button
                class="bg-primary text-white rounded-lg p-1 my-1 focus:outline-none"
                @click="updateProduct()"
            >
                {{ $route.params.lang == "en" ? "Update" : "更新" }}
            </button>
        </div>
    </div>

    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-0 left-0 w-full h-full flex items-center"
        v-show="state.showAddImageModal"
    >
        <div class="container mx-auto rounded-lg bg-white">
            <div class="relative">
                <button
                    class="absolute top-0 right-3 text-2xl hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showAddImageModal = false"
                >
                    &times;
                </button>
            </div>
            <div class="w-full flex-col justify-center">
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Image:" : "画像：" }}
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
                    v-if="state.newImageURL"
                    :src="state.newImageURL"
                />
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.image"
                    >{{ state.errors.image[0] }}</span
                >
            </div>
            <button
                class="bg-primary text-white rounded-lg p-1 my-1 focus:outline-none"
                @click="addImage()"
            >
                {{ $route.params.lang == "en" ? "Add image" : "画像を追加" }}
            </button>
        </div>
    </div>

    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-0 left-0 w-full h-full flex items-center"
        v-show="state.showChoosePrimaryImageModal"
    >
        <div class="container mx-auto rounded-lg bg-white">
            <div class="relative">
                <button
                    class="absolute top-0 right-3 text-2xl hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showChoosePrimaryImageModal = false"
                >
                    &times;
                </button>
            </div>
            <div class="w-full flex-col justify-center">
                <h1 class="font-extrabold text-primary">
                    {{
                        $route.params.lang == "en"
                            ? "Choose the primary image for this product"
                            : "この製品のプライマリイメージを選択してください"
                    }}
                </h1>
                <div class="flex justify-center">
                    <div v-for="image in product.product_images" class="px-2">
                        <input
                            type="radio"
                            :id="'productImage' + image.id"
                            name="productImage"
                            :value="image.id"
                            v-model="state.primaryImageId"
                        />
                        <label :for="'productImage' + image.id"
                            ><img
                                class="my-2 w-24 mx-auto"
                                :src="'/storage/' + image.path"
                        /></label>
                    </div>
                </div>
                <span
                    class="text-red-900 font-bold block"
                    v-if="state.errors.imageId"
                    >Please choose an image first</span
                >
            </div>
            <button
                class="bg-primary text-white rounded-lg p-1 my-1 focus:outline-none"
                @click="choosePrimaryImage()"
            >
                {{ $route.params.lang == "en" ? "Done" : "完了" }}
            </button>
        </div>
    </div>

    <div
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="fixed top-0 left-0 w-full h-full flex items-center"
        v-show="state.showDeleteProductModal"
    >
        <div class="container mx-auto rounded-lg bg-white">
            <div class="relative">
                <button
                    class="absolute top-0 right-3 text-2xl hover:text-gray-300 focus:outline-none text-primary"
                    @click="state.showDeleteProductModal = false"
                >
                    &times;
                </button>
            </div>
            <div class="w-full flex-col justify-center">
                <h1 class="font-extrabold text-primary">
                    {{
                        $route.params.lang == "en"
                            ? "Are you sure you want to delete this product?!"
                            : "この商品を削除してもよろしいですか？！"
                    }}
                </h1>
            </div>
            <button
                class="bg-primary text-white rounded-lg p-1 my-1 focus:outline-none"
                @click="deleteProduct()"
            >
                {{ $route.params.lang == "en" ? "Delete" : "削除" }}
            </button>
            <button
                class="bg-green-500 rounded-lg p-1 mx-1 focus:outline-none"
                @click="state.showDeleteProductModal = false"
            >
                {{
                    $route.params.lang == "en" ? "Nope, keep it" : "それを保つ"
                }}
            </button>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

export default {
    props: ["product"],

    setup(props) {
        const route = useRoute();
        const router = useRouter();

        const state = reactive({
            showEditProductModal: false,
            showAddImageModal: false,
            showChoosePrimaryImageModal: false,
            showDeleteProductModal: false,
            newImage: "",
            newImageURL: "",
            primaryImageId: "",
            errors: [],
        });

        let updateProduct = () => {
            store
                .dispatch("updateProduct", { product: props.product })
                .then((response) => {
                    router.push({
                        path:
                            "/original_brand/" +
                            props.product.id +
                            "/" +
                            route.params.lang,
                    });
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors;
                    }
                });
        };

        let addImage = () => {
            const newImageFormData = new FormData();
            newImageFormData.append("image", state.newImage);
            newImageFormData.append("productId", props.product.id);

            store
                .dispatch("addProductImage", {
                    imageAndProductId: newImageFormData,
                })
                .then((response) => {
                    router.push({
                        path:
                            "/original_brand/" +
                            props.product.id +
                            "/" +
                            route.params.lang,
                    });
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors;
                    }
                });
        };

        let imageUploaded = (event) => {
            state.newImage = event.target.files[0];
            state.newImageURL = URL.createObjectURL(event.target.files[0]);
        };

        let choosePrimaryImage = () => {
            store
                .dispatch("choosePrimaryProductImage", {
                    imageId: state.primaryImageId,
                    productId: props.product.id,
                })
                .then((response) => {
                    router.push({
                        path:
                            "/original_brand/" +
                            props.product.id +
                            "/" +
                            route.params.lang,
                    });
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors;
                    }
                });
        };

        let deleteProduct = () => {
            store
                .dispatch("deleteProduct", { id: props.product.id })
                .then((response) => {
                    router.push({
                        path: "/original_brand/" + route.params.lang,
                    });
                });
        };

        return {
            state,
            updateProduct,
            deleteProduct,
            imageUploaded,
            addImage,
            choosePrimaryImage,
        };
    },
};
</script>

<style></style>
