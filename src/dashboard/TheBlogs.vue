<template>
  <div v-for="blog in blogs" :key="blog.id">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.desc }}</p>
    <button>Read More</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "lorem ipsum",
          desc: "lorem ipsum dolor sit amet, consectet",
        },
        {
          id: 2,
          title: "lorem ipsum",
          desc: "lorem ipsum dolor sit amet, consectet",
        },
      ],
    };
  },
};
</script>
