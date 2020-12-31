<template>
    <div>
        <NavBar />
        <router-view></router-view>
        <HomeFooter />
    </div>
</template>

<script>
import NavBar from "./views/NavBar";
import HomeFooter from "./components/HomeFooter";

export default {
    components: {
        NavBar,
        HomeFooter,
    },
};
</script>

<style></style>
