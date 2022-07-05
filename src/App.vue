<template>
  <the-navbar v-if="isDashboard === '/dashboard'"></the-navbar>
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
      isDashboard: this.$route.fullPath
    }
  }
}
</script>

<style>

</style>