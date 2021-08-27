/*
 * @Description: 
 * @Autor: Huang Yingming
 * @LastEditors: Huang Yingming
 * @LastEditTime: 2021-08-27 17:58:31
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: 'undefined',
    name: 'undefined',
    roomId: 'undefined',
    url: 'localhost:40001'
  },
  mutations: {
    changeAccount(store, accountIndex) {
      store.account = accountIndex.account;
      store.name = accountIndex.name;
    },
    changeRoomId(store, id) {
      store.roomId = id
    },
    changeUrl(store, url) {
      store.url = url;
    }
  },
  actions: {
  },
  modules: {},
  getters: {
    getUrl: state => {
      return state.url;
    }
  }
})