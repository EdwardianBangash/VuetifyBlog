<template>
  <div class="navbar">
    <button class="close-menu">X</button>
    <ul class="menu">
      <li class="dropdown">Blogs</li>
      <ul class="child">
        <li><router-link to="/dashboard/blogs">Blog List</router-link></li>
        <li><router-link :to="{name:'addBlog'}">Add Blog</router-link></li>
      </ul>
      <li class="dropdown">Categories</li>
      <ul class="child">
        <li><router-link to="/dashboard/categories">Category List</router-link></li>
        <li><router-link :to="{name:'addCategory'}">Add Category</router-link></li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    let parent = document.querySelectorAll('.dropdown');
    for(let i = 0; i < parent.length; i++){
        parent[i].addEventListener('click', (e)=>{
        if(e.target.nextSibling.style.display == 'block'){
            e.target.nextSibling.style.display = 'none';
        }else{
            e.target.nextSibling.style.display = 'block';
        }
    });
    }
  },
};
</script>

<style scoped>
.navbar {
  width: 300px;
  height: 100vh;
  background: #756d58;
  position: relative;
}

ul{
    color: #fff;
}

ul.menu {
  margin-top: 30px;
}

ul.child {
  margin-left: 10px;
  display: none;
}

li{
  list-style-type: none;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}

a {
    color: #fff;
    text-decoration: none;
}

.close-menu {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: transparent;
}

.close-menu:hover {
  animation: close-menu-animation 0.5s ease-in 1;
}

@keyframes close-menu-animation {
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(30deg);
  }

  50% {
    transform: rotate(50deg);
  }

  70% {
    transform: rotate(100deg);
  }

  100% {
    transform: rotate(-180deg);
  }
}
</style>
