import Vue from 'vue'
import Vuex from 'vuex'
import search from '@/store/search'
import trends from '@/store/trends'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    search,
    trends
  }
})
