import Vue from 'vue'
import Vuex from 'vuex'
import * as loginServ from '../axios/loginService'
import * as articleServ from '../axios/articleService'
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
    // 从content中结构出commit，从payload中结构出name，loginPwd
    async login({ commit }, { loginId, loginPwd }) {
      commit("setIsLoading", true);
      const resp = await loginServ.login(loginId, loginPwd);
      commit("setData", resp.data);
      commit("setIsLoading", false);
      return resp.data;
    },
    loginOut({ commit }) {
      commit("setData", null);
      loginServ.loginOut();
    },

    async addArticle({ commit }, { title, content, imgUrl }) {
      const resp = await articleServ.addArticle(title, content, imgUrl);
      commit("setIsLoading", true);
      return resp.data;
    }
  }
})
