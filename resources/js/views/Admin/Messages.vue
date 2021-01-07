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
                        {{ $route.params.lang == "en" ? "Name" : "名前" }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{ $route.params.lang == "en" ? "Email" : "Eメール" }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "Message"
                                : "メッセージ"
                        }}
                    </th>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{ $route.params.lang == "en" ? "Sent at" : "に送信" }}
                    </th>
                </tr>
            </thead>
            <tbody v-for="message in state.messages" class="text-gray-700">
                <tr>
                    <td class="text-center py-3">{{ message.name }}</td>
                    <td class="text-center py-3">
                        <a
                            class="text-primary underline focus:outline-none"
                            :href="'mailto:' + message.email"
                            >{{ message.email }}</a
                        >
                    </td>
                    <td class="text-center py-3">
                        <AdminMessages :message="message" />
                    </td>
                    <td class="text-center py-3">
                        {{ message.created_at }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div
        class="pt-20 lg:pt-28 container mx-auto my-8 lg:hidden flex justify-center"
    >
        <table class="w-full">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th
                        class="text-center py-3 uppercase font-semibold text-sm"
                    >
                        {{
                            $route.params.lang == "en"
                                ? "Message"
                                : "メッセージ"
                        }}
                    </th>
                </tr>
            </thead>
            <tbody v-for="message in state.messages" class="text-gray-700">
                <tr>
                    <td class="text-center py-3">
                        <AdminMessages :message="message" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import AdminMessages from "../../components/AdminMessages";
import store from "../../store";

export default {
    components: {
        AdminMessages,
    },

    setup() {
        const state = reactive({
            messages: [],
        });

        onMounted(() => {
            store.dispatch("getAllMessages").then((response) => {
                state.messages = response.data;
            });
        });

        return { state };
    },
};
</script>

<style></style>
