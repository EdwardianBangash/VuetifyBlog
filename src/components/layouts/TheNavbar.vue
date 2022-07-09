<template>
  <div class="navbar-wrapper">
    <h2 href="/">Vuetifyblog</h2>
    <div class="navbar">
      <ul v-for="cat in categories" :key="cat.id">
        <li>
          <a href="" class="link">{{ cat.name }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="logins-wrapper" v-if="isLoggedIn">
    <router-link to="/login" class="link">Login</router-link>
    <router-link to="/register" class="link">Register</router-link>
  </div>
  <div class="logins-wrapper" v-else>
    <router-link to="/dashboard">Dashboard</router-link>
    <button class="btn logout-btn" @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get("/allCategories")
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          this.categories.push(response.data.data[i]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.user === null;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user", null);
    },
  },
};
</script>

<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #03abea;
  height: 50px;
  padding: 20px 10px;
}

.navbar{
  flex-grow: 2;
  width: 100%;
}

ul {
  list-style-type: none;
  text-align: right;
}

li {
  display: inline;
}

a.link {
  text-decoration: none;
  padding-left: 10px;
  color: #000;
  font-size: 1em;
}

a.active {
  background: #fff;
  padding: 15px 5px;
}

.logins-wrapper {
  position: absolute;
  right: 10px;
  top: 70px;
}

.logout-btn {
  background: rgb(164, 67, 67);
}

.logout-btn:hover {
  background: rgb(201, 55, 55);
}
</style>
