<template>
  <div>
    <form @submit.prevent="submitLogin">
      <label for="email">Email : </label>
      <input id="email" v-model="email" type="text">

      <label for="password">Password : </label>
      <input id="password" v-model="password" type="text">

      <button type="submit" name="button">
        Login
      </button>
    </form>

    <p>{{ error }}</p>

    <router-link to="/register">Don't have an account ? Register.</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('userModule/login', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({ name: 'dashboard' });
      }).catch(err => {
        if (err.response.status === 401) {
          this.error = 'Invalid credentials. Please try again.'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
