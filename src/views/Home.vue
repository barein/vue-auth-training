<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-show="isLoggedIn === false">
      To use this app you need to
      <router-link :to="{ name: 'register' }">
        register
      </router-link>
      or to
      <router-link :to="{ name: 'login' }">
        login
      </router-link>
    </div>
  </div>
</template>

<script>
import { authMixin } from '../Mixins/AuthMixin'

export default {
  mixins: [authMixin]
}
</script>
