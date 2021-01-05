import Vue from 'vue'
import Vuex from 'vuex'
import *  as loginUser from '../axios/loginServ';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    isLoading: false
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    async login({ commit }, { loginId, loginPwd }) {
      commit("setIsLoading", true);
      const resp = await loginUser.login(loginId, loginPwd);
      commit("setData", resp.data);
      commit("setIsLoading", false);
      return resp.data;
    },
    loginOut({ commit }) {
      commit("setData", null);
      loginUser.loginOut();
    }
  },
  modules: {
  }
})
