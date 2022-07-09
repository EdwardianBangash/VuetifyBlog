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
          <td class="blog-title">{{ blog.title }}</td>
          <td class="blog-desc">{{ blog.description }}</td>
          <div class="btn-group">
            <router-link
              :to="{ name: 'editBlog', params: { id: 1 } }"
              class="btn btn-edit"
              >Edit</router-link
            >
            <button class="btn btn-delete">Delete</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    axios
      .get("/userBlogs")
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          this.blogs.push(response.data.data[i]);
        }
      })
      .catch((error) => {});
  },
};
</script>

<style scoped>
td.blog-title,.blog-desc{
  text-align: justify;
}

</style>
