<template>
  <div class="wrapper">
    <h2>Edit Blog</h2>
    <div class="message">{{message}}</div>
    <form @submit.prevent="editBlog">
      <div class="form-group">
        <label for="">Blog Title:</label>
        <input type="text" class="form-control" v-model="blogTitle"/>
      </div>
      <div class="form-group">
        <label for="">Blog Description:</label>
        <textarea
          class="form-control"
          cols="100"
          rows="20"
          v-model="blogDescription"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="">Category:</label>
        <select
          name="category_id"
          id=""
          v-for="cat in categories"
          :key="cat.id"
          class="form-control"
          v-model="categoryId"
        >
          <option :value="cat.id">{{ cat.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-submit">Update Blog</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "description"],
  data() {
    return {
      categories: [],
      categoryId: null,
      message: null,
      blogTitle: this.$store.getters.blogTitle,
      blogDescription: this.$store.getters.blogDescription
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
  methods: {
      editBlog() {
      axios
        .post("/updateBlog", {
          id: this.$route.params.id,
          category_id: this.categoryId,
          title: this.blogTitle,
          description: this.blogDescription,
        })
        .then((response) => {
          this.message = response.data.success
          this.$store.dispatch('blogId', null)
          this.$store.dispatch('blogTitle', null)
          this.$store.dispatch('blogDescription', null)
          this.$router.push({name:'theBlog'})
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
