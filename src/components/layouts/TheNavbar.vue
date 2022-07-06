<template>
  <div class="navbar-wrapper">
    <h2 href="/">Vuetifyblog</h2>
    <ul>
      <li><a href="" class="link active">Entertainment</a></li>
      <li><a href="" class="link">Sports</a></li>
      <li><a href="" class="link">Technology</a></li>
      <li><a href="" class="link">Showbiz</a></li>
      <li><a href="" class="link">Inventions</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #03abea;
  height: 50px;
  padding: 20px 10px;
}

ul {
  list-style-type: none;
  text-align: right;
}

li {
  display: inline;
}

a.link {
  text-decoration: none;
  padding-left: 10px;
  color: #000;
  font-size: 1em;
}

a.active {
    background: #fff;
    padding: 15px 5px;
}
</style>
