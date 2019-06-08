<template>
<div id="root">
    <NavigationBar />
    <router-view />
    <Footer />
</div>
</template>

<style>
#root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
