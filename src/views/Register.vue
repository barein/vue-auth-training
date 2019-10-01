<template>
  <div>
    <form @submit.prevent="submitRegistration">
      <label for="name">Name : </label>
      <input id="name" v-model="name" type="text">

      <label for="email">Email : </label>
      <input id="email" v-model="email" type="text">

      <label for="password">Password : </label>
      <input id="password" v-model="password" type="text">

      <button type="submit" name="button">
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitRegistration () {
      this.$store.dispatch('userModule/register', {
        name: this.name,
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
