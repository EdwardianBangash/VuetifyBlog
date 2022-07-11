<template>
 <div class="navbar-wrapper">
    <router-link to="/" class="logo">Vuetifyblog</router-link>
    <div class="navbar">
      <!-- All and category refactoring is remaining-->
      <ul v-for="cat in categories" :key="cat.id">
        <li class="link" @click="loadThis(cat.id)">{{ cat.name }}</li>
      </ul>
      <div>
        <div class="logins-wrapper" v-if="isLoggedIn">
          <router-link to="/login" class="link">Login</router-link>
          <router-link to="/register" class="link">Register</router-link>
        </div>
        <div class="logins-wrapper" v-else>
          <router-link to="/dashboard" class="link">Dashboard</router-link>
          <button class="btn logout-btn" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
  <div class="blogs-wrapper">
    <h2>Hot Blogs</h2>
    <div v-for="blog in blogs" :key="blog.id">
      <div  class="blogs-content">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.description }}</p>
      <router-link class="readmore-btn" :to="{name:'blogView', params:{id:blog.id}}">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
      selectedTab: "Entertainment",
      categories: [],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.user === null;
    },
  },
  methods: {
    loadThis(id){
      this.blogs = [];
       axios
      .get("/blogs/"+id)
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          this.blogs.push(response.data.data[i]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
   mounted(){
    axios.get('/blogs').then((response)=>{
      for(let i = 0; i < response.data.data.length; i++){
        this.blogs.push(response.data.data[i]);
      }
    }).catch((error)=>{

    })
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
  }
};
</script>

<style scoped>
.blogs-wrapper {
  padding: 50px;
}

.blogs-content{
  background: #8FDCD5;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  position: relative;
  height: 100px;
}

.readmore-btn{
  position: absolute;
  right: 20px;
  padding: 7px 10px;
  border: none;
  background-color: #03abea;
  cursor: pointer;
  color: #fff;
  transition: .2s ease-in all;
}

.readmore-btn:hover{
  background-color: #005bf9;
}

.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #03abea;
  height: 50px;
  padding: 20px 10px;
}

.navbar {
  flex-grow: 2;
  min-width: 30%;
  position: absolute;
  right: 0;
}

ul {
  list-style-type: none;
  text-align: right;
}

.link {
  text-decoration: none;
  padding-left: 10px;
  color: #000;
  font-size: 1em;
  float: left;
  cursor: pointer;
}

a.active {
  background: #fff;
  padding: 15px 5px;
}

.logo {
  width: 20%;
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

.logins-wrapper button {
      margin-left: 5px;
      margin-top: -2px;
}

.logout-btn {
  background: rgb(164, 67, 67);
}

.logout-btn:hover {
  background: rgb(201, 55, 55);
}
</style>
