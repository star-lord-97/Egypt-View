<template>
    <div
        class="pt-20 lg:pt-28 container mx-auto my-8 hidden lg:flex justify-center"
    >
        <table class="w-full">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{ $route.params.lang == "en" ? "Title" : "題名" }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{ $route.params.lang == "en" ? "Price" : "価格" }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{ $route.params.lang == "en" ? "Details" : "詳細" }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "Product Actions"
                                : "製品アクション"
                        }}
                    </th>
                </tr>
            </thead>
            <tbody v-for="product in state.products" class="text-gray-700">
                <tr>
                    <td class="text-center py-3">{{ product.title }}</td>
                    <td class="text-center py-3">{{ product.price }} EGP</td>
                    <td class="text-center py-3">
                        <AdminProductDetails :details="product.details" />
                    </td>
                    <td class="text-center py-3 flex flex-row justify-center">
                        <AdminProductActions :product="product" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div
        class="pt-20 lg:pt-28 container mx-auto my-8 lg:hidden flex justify-center"
    >
        <h1>
            {{
                $route.params.lang == "en"
                    ? "Available only on large devices"
                    : "大型デバイスでのみ使用可能"
            }}
        </h1>
    </div>
    <div class="container mx-auto hidden lg:flex justify-center">
        <AdminAddProduct />
    </div>
</template>

<script>
import store from "../../store";
import { onMounted, reactive } from "vue";
import AdminProductDetails from "../../components/AdminProductDetails";
import AdminProductActions from "../../components/AdminProductActions";
import AdminAddProduct from "../../components/AdminAddProduct";

export default {
    components: {
        AdminProductDetails,
        AdminProductActions,
        AdminAddProduct,
    },

    setup() {
        const state = reactive({
            products: [],
        });

        onMounted(() => {
            store.dispatch("getAllProducts").then((response) => {
                state.products = response.data;
            });
        });

        return { state };
    },
};
</script>

<style></style>
