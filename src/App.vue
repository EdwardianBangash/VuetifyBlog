<template>
  <the-navbar v-if="!isDashboard"></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar.vue'
export default {
  components: {
    TheNavbar
  },
  data(){
    return { 
    }
  },
  computed: {
    isDashboard(){
      return this.$route.fullPath.includes('/dashboard');
    }
  }
}
</script>

<style>

</style>