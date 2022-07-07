<template>
  <div class="navbar">
    <button class="close-menu">X</button>
    <ul class="parent">
      <li><router-link to="/dashboard/blogs">Blogs</router-link></li>
      <li class="dropdown">
        <router-link to="/dashboard/categories">Categories</router-link>
        <ul class="child">
          <li><a href="">Add Category</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 300px;
  height: 100vh;
  background: #756D58;
  position: relative;
}

ul.parent{
    margin-top: 30px;
}

ul.child {
    margin-left: 10px;
    display: none;
}

li {
    list-style-type: none;
    padding: 20px;
}

a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
}

.close-menu{
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
    animation: close-menu-animation .5s ease-in 1;
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
