<template>
  <div>
    <form @submit.prevent="submitLogin">
      <label for="email">Email : </label>
      <input id="email" v-model="email" type="text">

      <label for="password">Password : </label>
      <input id="password" v-model="password" type="text">

      <button type="submit" name="button">
        Register
      </button>
    </form>
    <router-link to="/register">Don't have an account ? Register.</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('userModule/login', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({ name: 'dashboard' });
      })
    }
  }
}
</script>

<style scoped>

</style>
