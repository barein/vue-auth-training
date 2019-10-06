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

    <ul>
      <li v-for="(error, index) in errors"> {{ error }} </li>
    </ul>

    <router-link to="/login">Already have an account ? Login.</router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      errors: []
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
      }).catch(err => {
        if (err.response.status === 400) {
          this.errors = err.response.data;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
