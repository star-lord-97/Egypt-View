<template>
    <div>
        <NavBar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import NavBar from "./views/NavBar";
import Footer from "./components/Footer";

export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style></style>
