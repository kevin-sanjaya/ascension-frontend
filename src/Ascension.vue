<template>
<div id="root">
    <NavigationBar />
    <router-view />
    <Footer />
</div>
</template>

<style>
@font-face {
  font-family: "Akkurat";
  src: url("../src/assets/font/Akkurat.ttf");
}

#root {
    font-family: "Akkurat";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1024px;
}
</style>

<script>
import NavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    NavigationBar,
    Footer,
  },
};
</script>
