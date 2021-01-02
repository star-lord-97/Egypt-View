<template>
    <div class="pt-28 container mx-auto">
        <div class="lg:grid grid-cols-3 gap-4">
            <div class="lg:col-span-2 container text-left pb-4">
                <h1
                    class="text-3xl tracking-widest font-bold font-opensans uppercase p-4"
                >
                    {{
                        $route.params.lang == "en"
                            ? "WE'RE READY, LET'S TALK."
                            : "お問い合わせ"
                    }}
                </h1>
                <div class="ml-4 my-4 w-3/5 font-bold font-opensans">
                    <input
                        type="text"
                        class="border border-gray-400 p-2 w-full my-2 focus:outline-none"
                        name="name"
                        v-model="state.message.name"
                        :placeholder="
                            $route.params.lang == 'en' ? 'Your Name' : 'お名前'
                        "
                        required
                    />
                    <div v-if="state.errors.name" class="text-center">
                        <span class="text-primary font-bold">{{
                            state.errors.name[0]
                        }}</span>
                    </div>
                    <input
                        type="email"
                        class="border border-gray-400 p-2 w-full my-2 focus:outline-none"
                        name="email"
                        v-model="state.message.email"
                        :placeholder="
                            $route.params.lang == 'en'
                                ? 'Email Address'
                                : 'メールアドレス'
                        "
                        required
                    />
                    <div v-if="state.errors.email" class="text-center">
                        <span class="text-primary font-bold">{{
                            state.errors.email[0]
                        }}</span>
                    </div>
                    <textarea
                        name="message"
                        v-model="state.message.message"
                        :placeholder="
                            $route.params.lang == 'en'
                                ? 'Message'
                                : 'お問い合わせ内容'
                        "
                        class="border border-gray-400 p-2 w-full my-2 focus:outline-none"
                    ></textarea>
                    <div v-if="state.errors.message" class="text-center">
                        <span class="text-primary font-bold">{{
                            state.errors.message[0]
                        }}</span>
                    </div>
                    <button
                        class="mx-auto lg:mx-0 bg-white text-primary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-100 ease-in-out uppercase"
                        @click="sendMessageHandler()"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "send message"
                                : "送信送信"
                        }}
                    </button>
                    <div
                        class="bg-green-200 p-2 rounded-lg"
                        v-show="state.messageSentNotification"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "We have received your message, and will contact you ASAP, thank you for contacting us."
                                : "私たちはあなたのメッセージを受け取りました、そしてできるだけ早くあなたに連絡します、私達に連絡してくれてありがとう"
                        }}
                    </div>
                </div>
            </div>
            <div class="container text-left pb-4">
                <h1
                    class="text-3xl tracking-widest font-bold font-opensans uppercase p-4"
                >
                    {{ $route.params.lang == "en" ? "CONTACT INFO" : "連絡先" }}
                </h1>
                <p class="text-lg font-opensans uppercase pl-4">
                    {{ $route.params.lang == "en" ? "ADDRESS" : "住所" }}
                </p>
                <p class="text-lg font-opensans pl-4 text-red-400">
                    15 Bostan St. Taharir Cairo Egypt
                </p>
                <p class="text-lg font-opensans uppercase pl-4">
                    {{
                        $route.params.lang == "en"
                            ? "EMAIL US"
                            : "私達に電子メールを送り"
                    }}
                </p>
                <p class="text-lg font-opensans pl-4 text-red-400">
                    info@egypt-view.com
                </p>
                <p class="text-lg font-opensans uppercase pl-4">
                    {{ $route.params.lang == "en" ? "CALL US" : "電話" }}
                </p>
                <p class="text-lg font-opensans pl-4 text-red-400">
                    +201024995205
                    <br />
                    0081-03-3917-5766
                    <br />
                    +201067089257
                    <br />
                    +201117666373
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    setup() {
        const state = reactive({
            message: {
                name: "",
                email: "",
                message: "",
            },

            messageSentNotification: false,

            errors: [],
        });

        let sendMessageHandler = () => {
            axios
                .post("http://localhost:8000/api/message", state.message)
                .then(() => {
                    state.message.name = "";
                    state.message.email = "";
                    state.message.message = "";
                    state.errors = [];
                    state.messageSentNotification = true;
                    setTimeout(
                        () => (state.messageSentNotification = false),
                        2000
                    );
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        state.errors = error.response.data.errors;
                    }
                });
        };

        return { state, sendMessageHandler };
    },
};
</script>

<style></style>
