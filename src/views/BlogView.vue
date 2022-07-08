<template>
  <div class="wrapper">
     <h4>{{ blog.title }}</h4>
    <div>
      <div  class="blogs-content">
      <p>{{ blog.description }}</p>
      </div>
    </div>
    <!-- <p>{{ author }}</p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: []
    };
  },
  computed: {
    author(){
        return this.blog.user.name;
    }
  },
   mounted(){
    axios.get('/blog/'+this.$route.params.id).then((response)=>{
        this.blog = response.data.data;
    }).catch((error)=>{

    })
  }
};
</script>

<style scoped>
.blogs-content{
    margin-top: 20px;
}
</style>
