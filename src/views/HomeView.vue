<template>
  <div class="blogs-wrapper">
    <h2>Hot Blogs</h2>
    <div v-for="blog in blogs" :key="blog.id">
      <div  class="blogs-content">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.desc }}</p>
      <button class="readmore-btn">Read More</button>
      </div>
    </div>
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
      selectedTab: "Entertainment",
    };
  },
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
