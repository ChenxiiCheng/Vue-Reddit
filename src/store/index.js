import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  //要设置的全局访问的state对象
  page: 1,
  limit: 20,
  list: [],
  user: {},
  detail: {},
  detail_user: {}
};
const getters = {
  //实时监听state值的变化(最新状态)
  getPage(state) {
    return state.page;
  },
  getLimit(state) {
    return state.limit;
  },
  getList(state) {
    return state.list;
  },
  getUser(state) {
    return state.user;
  },
  getDetail(state) {
    return state.detail;
  },
  getDetailUser(state) {
    return state.detail_user;
  }
};
const mutations = {
  changeList(state, data) {
    state.list = data;
  },
  changeLimit(state) {
    state.limit += 10;
  },
  changeUser(state, data) {
    state.user = data;
  },
  changeDetail(state, data) {
    state.detail = data;
  },
  changeDetailUser(state, data) {
    state.detail_user = data;
  }
};
const actions = {
  actionList(context, data) {
    context.commit('changeList', data);
  },
  actionLimit(context) {
    context.commit('changeLimit');
  },
  actionUser(context, data) {
    context.commit('changeUser', data);
  },
  actionDetail(context, data) {
    context.commit('changeDetail', data);
  },
  actionDetailUser(context, data) {
    context.commit('changeDetailUser', data);
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
