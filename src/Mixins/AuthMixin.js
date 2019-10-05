import { mapGetters } from 'vuex'

export const authMixin = {
  computed: {
    ...mapGetters('userModule', ['isLoggedIn'])
  }
}
