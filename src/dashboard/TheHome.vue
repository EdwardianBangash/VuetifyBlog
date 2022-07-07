<template>
  <div class="dashboard-wrapper">
    <the-navbar></the-navbar>
    <div class="card-wrapper" v-if="!dashboardHome">
    <div class="card category-card">
      <div class="card-title">Categories</div>
      <div class="card-total">10</div>
    </div>
    <div class="card blogs-card">
      <div class="card-title">Blogs</div>
      <div class="card-total">10</div>
    </div>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./layouts/TheNavbar.vue";
export default {
  name: "DashboardHomeView",
  components: {
    TheNavbar,
  },
  computed: {
    dashboardHome(){
        return this.$route.fullPath.includes("/dashboard/");
    }
  }
};
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
  flex-direction: row;
}

.card-wrapper{
 display: flex;
  flex-direction: row;   
}
.card {
    margin: 50px;
    padding: 20px;
    height: 150px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.blogs-card {
    background:#A59344;
}

.category-card {
    background:#A59344;
}

.card-total {
    margin-top: 20px;
}
</style>
