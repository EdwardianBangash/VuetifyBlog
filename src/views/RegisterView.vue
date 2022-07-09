<template>
    <div class="register-wrapper">
        <h2>Register yourself now!</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="">Fullname</label>
                <input type="text" class="form-control" v-model="fullname">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" v-model="confirm_password">
            </div>
            <button class="btn btn-submit" type="submit">Register</button>
            <p><small>Already Have an Account <router-link :to="{name:'loginView'}">Login Here</router-link></small></p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
    return {
        error: null,
        fullname: '',
        email: '',
        password: '',
        confirm_password: '',
    };
  },
  methods: {
    register() {
      axios
        .post("/register",{
            name: this.fullname,
            email: this.email,
            password: this.password,
            confirm_password: this.confirm_password
        })
        .then((response) => {
          this.$store.state.token = response.data.data;
        })
        .catch((error) => {
            this.error = error.response.error
        });
    },
  },
}
</script>