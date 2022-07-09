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
      return this.$route.fullPath.includes("/dashboard") || this.$route.fullPath.includes("/login") || this.$route.fullPath.includes("/register");
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


.login-wrapper h2{
  text-align: center;
  padding: 50px;
}

.login-wrapper form{
  margin: 0 auto;
  width: 400px;
}

.register-wrapper h2{
  text-align: center;
  padding: 50px;
}

.register-wrapper form{
  margin: 0 auto;
  width: 400px;
}

.btn-group{
  display: flex;
}

</style>
