<template>
  <div class="wrapper">
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
          <button class="btn btn-edit">Edit</button>
          <button class="btn btn-delete">Delete</button>
        </tr>
      </tbody>
    </table>
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

<style scoped>

</style>
