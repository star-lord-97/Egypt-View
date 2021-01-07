import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            api_url: "http://localhost:8000/api/",
            adminToken: localStorage.getItem("adminToken") || null,
        };
    },

    mutations: {
        clearAdminToken(state) {
            state.adminToken = null;
        },

        addAdminToken(state) {
            state.adminToken = localStorage.getItem("adminToken");
        },
    },

    getters: {
        isLoggedIn(state) {
            return state.adminToken !== null;
        },
    },

    actions: {
        getGalleryImages(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.api_url + "gallery_images")
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        getAllProducts(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.api_url + "products")
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        getOneProduct(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.api_url + "products/" + payload.id)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        storeMessage(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post(context.state.api_url + "messages", payload.message)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        getAllMessages(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + context.state.adminToken;
                axios
                    .get(context.state.api_url + "messages")
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        login(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post(context.state.api_url + "login", payload.credentials)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        logout(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + context.state.adminToken;
                axios
                    .post(context.state.api_url + "logout")
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});
