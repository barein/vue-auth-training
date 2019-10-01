import userService from '@/services/userService';

export const namespaced = true;

export const state = {
  userData: {}
};

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.userData = userData
  }
}

export const actions = {
  register ({ commit }, credential) {
    return userService.register(credential).then(({ data }) => {
      commit('SET_USER_DATA', data);
      localStorage.setItem('userData', JSON.stringify(data));
      userService.apiClient.defaults.headers.common['Authorization'] = `Bearer ${
        data.token
      }`;
    })
  }
};
