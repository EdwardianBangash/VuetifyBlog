<template>
    <div class="wrapper">
        <h2>Add Category</h2>
        <form @submit.prevent="addCategory" ref="addCategoryForm">
        <div class="form-group">
            <label for="">Category Name:</label>
            <input type="text" class="form-control" v-model="category_name">   
        </div>
        <button type="submit" class="btn btn-submit">Add Category</button>
        <div class="message">{{message}}</div>
    </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            category_name: null,
            message: null
        }
    },
    methods: {
        addCategory(){
            axios
        .post("/storeCategory", {name:this.category_name})
        .then((response) => {
            this.message = response.data.success;
            this.category_name === ''
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