<template>
  <div v-for="blog in blogs" :key="blog.id">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.description }}</p>
    <button>Read More</button>
  </div>
</template>

<script>
export default {
  mounted(){
    if(this.blog.length === 0){
      axios
        .get("/blogs")
        .then((response) => {
          for (let i = 0; i < response.data.data.length; i++) {
            this.blogs.push(response.data.data[i]);
          }
        })
        .catch((error) => {});
    }
  },
  data() {
    return {
      blogs: [],
    };
  },
};
</script>