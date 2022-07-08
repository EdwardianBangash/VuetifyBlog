<template>
  <div class="blogs-wrapper">
    <h2>Hot Blogs</h2>
    <div v-for="blog in blogs" :key="blog.id">
      <div  class="blogs-content">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.desc }}</p>
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
    };
  },
   mounted(){
    axios.get('/blogs').then((response)=>{
      for(let i = 0; i < response.data.data.length; i++){
        this.blogs.push(response.data.data[i]);
      }
    }).catch((error)=>{

    })
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
</style>
