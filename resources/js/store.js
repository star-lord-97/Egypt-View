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
        addAdminToken(state) {
            state.adminToken = localStorage.getItem("adminToken");
        },

        clearAdminToken(state) {
            state.adminToken = null;
        },
    },

    getters: {
        isLoggedIn(state) {
            return state.adminToken !== null;
        },
    },

    actions: {
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

        createProduct(context, payload) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.adminToken;
            return new Promise((resolve, reject) => {
                axios
                    .post(context.state.api_url + "products/", payload.product)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        updateProduct(context, payload) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.adminToken;
            return new Promise((resolve, reject) => {
                axios
                    .patch(
                        context.state.api_url +
                            "products/" +
                            payload.product.id,
                        payload.product
                    )
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        addProductImage(context, payload) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.adminToken;
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        context.state.api_url + "product_images/",
                        payload.imageAndProductId
                    )
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        choosePrimaryProductImage(context, payload) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.adminToken;
            return new Promise((resolve, reject) => {
                axios
                    .patch(context.state.api_url + "product_images", payload)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        deleteProduct(context, payload) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.adminToken;
            return new Promise((resolve, reject) => {
                axios
                    .delete(context.state.api_url + "products/" + payload.id)
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
    },
});
