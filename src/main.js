import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const userData = localStorage.getItem('userData');

    if (userData) {
      this.$store.commit('userModule/SET_USER_DATA', JSON.parse(userData))
    }

    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.response.status === 401) {
        this.$store.dispatch('userModule/logout');
      }

      return Promise.reject(error);
    });
  },
  render: h => h(App)
}).$mount('#app')
