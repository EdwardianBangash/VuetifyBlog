<template>
  <the-navbar v-if="!isDashboard"></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {};
  },
  computed: {
    isDashboard() {
      return this.$route.fullPath.includes("/dashboard");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: tahoma,sans-serif;
}
</style>
