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

<style>

.dashboard-wrapper {
    display: flex;
  flex-direction: row;
}

.wrapper {
    margin: 50px;
    flex-grow: 2;
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

table {
    width: 100%;
    text-align: center;
}

table th {
    padding: 20px;
}

table tbody td {
    padding: 10px;
}

.btn{
   border: none;
   padding: 5px 10px;
   color: #fff;
   cursor: pointer;
   font-size: 15px;
   border-radius: 2px;
}

.btn-delete{
   background: rgb(220, 13, 13);
    margin-left: 5px;
}

.btn-delete:hover{
    background: rgb(202, 21, 21);
}

.btn-edit {
     background: rgb(20, 98, 187);
}

.btn-edit:hover{
     background: rgb(9, 104, 212);
}

a.btn {
    text-decoration: none;
}

form {
    background: #D8CA88;
    width: 500px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 2px;
}

input {
    width: 100%;
    font-size: 15px;
    padding: 5px;
    margin-top: 5px;
}

label{
    font-weight: bold;
}

.btn-submit{
    margin-top: 10px;
    padding: 10px;
    background: rgb(20, 98, 187);
}

.btn-submit:hover{
     background: rgb(9, 104, 212);
}
</style>
