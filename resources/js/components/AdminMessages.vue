<template>
    <button
        @click="state.showModal = true"
        class="text-primary underline focus:outline-none"
    >
        {{ $route.params.lang == "en" ? "Show Message" : "メッセージを表示" }}
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
            <div class="lg:hidden">
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Name" : "名前" }}
                </h1>
                <p class="text-lg">{{ message.name }}</p>
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Email" : "Eメール" }}
                </h1>
                <p class="text-lg">{{ message.email }}</p>
                <h1 class="font-extrabold text-primary">
                    {{ $route.params.lang == "en" ? "Sent at" : "に送信" }}
                </h1>
                <p class="text-lg">{{ message.created_at }}</p>
            </div>
            <div>
                <h1 class="font-extrabold text-primary">
                    {{
                        $route.params.lang == "en" ? "Message:" : "メッセージ："
                    }}
                </h1>
                <p class="text-lg">{{ message.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    props: ["message"],

    setup() {
        const state = reactive({
            showModal: false,
        });

        return { state };
    },
};
</script>

<style></style>
