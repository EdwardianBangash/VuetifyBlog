<template>
  <div class="wrapper">
    <h2>Category List</h2>
    <div class="message">{{message}}</div>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tbody>
        <tr v-for="cat in categories" :key="cat.id">
          <td>{{ cat.id }}</td>
          <td>{{ cat.name }}</td>
          <td>
            <router-link
              class="btn btn-edit"
              :to="{ name: 'editCategory', params: { id: 1 } }"
              >Edit</router-link
            >
            <button class="btn btn-delete" @click="deleteCategory(cat.id)">
              Delete
            </button>
          </td>
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
      categories: [],
      message: null,
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
    deleteCategory(deleteId) {
      axios
        .post("/deleteCategory", {id:deleteId})
        .then((response) => {
            this.categories = this.categories.filter((i)=>i.id != deleteId);
            this.message = response.data.success;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
    .message {
        padding-top: 5px;
    }
</style>
