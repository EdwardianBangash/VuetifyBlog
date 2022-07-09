<template>
    <div class="wrapper">
        <h2>Add Blog</h2>
        <div class="message">{{message}}</div>
        <form @submit.prevent="addBlog">
        <div class="form-group">
            <label for="">Blog Title:</label>
            <input type="text" class="form-control" v-model="title">   
        </div>
        <div class="form-group">
            <label for="">Blog Description:</label>
            <textarea class="form-control" cols="100" rows="20" v-model="description"></textarea> 
        </div>
        <div class="form-group">
            <label for="">Category:</label>
            <select name="category_id" id="" v-for="cat in categories" :key="cat.id" class="form-control" v-model="categoryId">
                <option :value="cat.id">{{cat.name}}</option>
            </select> 
        </div>
        
        <button type="submit" class="btn btn-submit">Add Blog</button>
    </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
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
     data(){
        return {
            title: null,
            description: null,
            categoryId: null,
            message: null,
            categories: []
        }
    },
    methods: {
        addBlog(){
            axios
        .post("/storeBlog", 
        {
            category_id:this.categoryId,
            title:this.title,
            description:this.description
        })
        .then((response) => {
            this.message = response.data.success;
            this.title = ''
            this.description = ''
        })
        .catch((error) => {
          console.log(error);
        });
        }
    }
}
</script>