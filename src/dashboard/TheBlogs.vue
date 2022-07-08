<template>
  <div class="wrapper">
    <h2>Blog List</h2>
    <table>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>{{ blog.id }}</td>
          <td>{{ blog.title }}</td>
          <td>{{ blog.desc }}</td>
          <router-link :to="{name:'editBlog', params:{id:1}}" class="btn btn-edit">Edit</router-link>
          <button class="btn btn-delete">Delete</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      blogs: [],
    };
  },
  mounted(){
    axios.get('/userBlogs').then((response)=>{
      this.blogs.push(response.data.data);
    }).catch((error)=>{

    })
  }
};
</script>

<style scoped>

</style>
