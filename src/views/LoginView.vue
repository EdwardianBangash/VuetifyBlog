<template>
  <div class="login-wrapper">
    <h2>Login Now</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="">Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button class="btn btn-submit" type="submit">Login</button>
      <p>
        <small
          >Don't Have an Account
          <router-link :to="{ name: 'registerView' }"
            >Register Here</router-link
          ></small
        >
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted(){
    if(this.$store.state.token !== null){
      this.$router.go(-1);
    }
  },
  data() {
    return {
      error: null,
      email: "",
      password: "",
    };
  },
//   computed:{
//     isLoggedIn(){
//         return this.$store.state.token;
//     }
//   },
  methods: {
    login() {
      axios
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
        localStorage.setItem("token", response.data.access_token);
          this.$store.dispatch('user', response.data.access_token)
          this.$router.push('/');
        })
        .catch((error) => {
            console.log(error)
        });
    },
  },
};
</script>
