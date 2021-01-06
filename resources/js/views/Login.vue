<template>
    <div class="max-w-lg mx-auto p-8 my-10 rounded-lg shadow-2xl mt-28">
        <p class="text-gray-600 pt-2">
            {{
                $route.params.lang == "en"
                    ? "Admin?! Sign in to your account"
                    : "管理者？！ アカウントにサインインします"
            }}
        </p>

        <div class="mt-10">
            <div class="flex flex-col">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                        for="email"
                    >
                        {{
                            $route.params.lang == "en" ? "Email" : "Eメール"
                        }}</label
                    >
                    <input
                        type="text"
                        id="email"
                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                        v-model="state.credentials.email"
                    />
                    <div v-if="state.errors.email" class="text-center">
                        <span class="text-primary font-bold">{{
                            state.errors.email[0]
                        }}</span>
                    </div>
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                        for="password"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "Password"
                                : "パスワード"
                        }}
                    </label>
                    <input
                        type="password"
                        id="password"
                        class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                        v-model="state.credentials.password"
                    />
                    <div v-if="state.errors.password" class="text-center">
                        <span class="text-primary font-bold">{{
                            state.errors.password[0]
                        }}</span>
                    </div>
                </div>
                <button
                    class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                    @click="signInHandler()"
                >
                    {{ $route.params.lang == "en" ? "Sign In" : "サインイン" }}
                </button>
            </div>
        </div>
        <p class="p-4">
            {{
                $route.params.lang == "en"
                    ? "Not an admin?!"
                    : "管理者ではありませんか？！"
            }}
            <router-link
                :to="'/' + $route.params.lang"
                class="font-bold hover:underline text-primary"
                >{{
                    $route.params.lang == "en" ? "back to Home" : "家に帰る"
                }}</router-link
            >
        </p>
    </div>
</template>

<script>
import { reactive } from "vue";
import store from "../store";
import { useRouter, useRoute } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();

        const state = reactive({
            credentials: {
                email: "",
                password: "",
            },

            errors: [],
        });

        let signInHandler = () => {
            store
                .dispatch("login", { credentials: state.credentials })
                .then((response) => {
                    localStorage.setItem("adminToken", response.data);
                    store.commit("addAdminToken");
                    router.push({ path: "/" + route.params.lang });
                });
        };

        return { state, signInHandler };
    },
};
</script>

<style></style>
