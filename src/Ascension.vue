<template>
<div id="root">
    <Sidebar />
    <!-- <NavigationBar /> -->
    <router-view />
    <!-- <Footer /> -->
</div>
</template>

<style>
@font-face {
  font-family: "Akkurat";
  src: url("../src/assets/font/Akkurat.ttf");
}

#root {
  /*font-family: "Akkurat";*/

}
</style>

<script>
import NavigationBar from '@/components/navigation-bar/NavigationBar.vue';
import Footer from '@/components/footer/Footer.vue';
import Sidebar from '@/components/side-bar/Sidebar.vue';

export default {
  components: {
    NavigationBar,
    Footer,
    Sidebar
  },
};
</script>
