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
            <button
              class="btn btn-edit"
              @click="
                editBlog({
                  id: blog.id,
                  title: blog.title,
                  description: blog.description,
                })
              "
            >Edit</button>
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
  methods: {
    editBlog(payload){
      this.$store.dispatch('blogId', payload.id);
      this.$store.dispatch('blogTitle', payload.title);
      this.$store.dispatch('blogDescription', payload.description);
      this.$router.push({name:'editBlog', params:{id: payload.id}});
    }
  }
};
</script>

<style scoped>
td.blog-title,
.blog-desc {
  text-align: justify;
}
</style>
