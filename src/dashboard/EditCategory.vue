<template>
    <div class="wrapper">
        <h2>Edit Category</h2>
        <form @submit.prevent="editCategory">
        <div class="form-group">
            <label for="">Category Name:</label>
            <input type="text" class="form-control" v-model="name">   
        </div>
        <button type="submit" class="btn btn-submit">Update Category</button>
    </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            name: this.$store.getters.categoryName
        }
    },
    methods: {
        editCategory() {
      axios
        .post("/updateCategory", {
          id: this.$route.params.id,
          name: this.name,
        })
        .then((response) => {
          this.$store.dispatch('categoryName', null)
          this.$router.push({name:'theCategories'})
        })
        .catch((error) => {
          console.log(error);
        });
    }
    }
}   
</script>

<style scoped>

</style>