import userService from '@/services/userService'

export const namespaced = true

export const state = {
  userData: {}
}

function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { return false }
  }
  return true
}

export const getters = {
  isLoggedIn () {
    return !isEmpty(state.userData)
  }
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.userData = userData
    localStorage.setItem('userData', JSON.stringify(userData))
    userService.apiClient.defaults.headers.common['Authorization'] = `Bearer ${
      userData.token
    }`
  },
  LOGOUT () {
    localStorage.removeItem('userData');
    location.reload();
  }
}

export const actions = {
  register ({ commit }, credential) {
    return userService.register(credential).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  login ({ commit }, credential) {
    return userService.login(credential).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  logout ({ commit }) {
    commit('LOGOUT')
  }
}
