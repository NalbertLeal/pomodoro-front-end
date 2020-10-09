import Vue from 'vue'
import Vuex from 'vuex'

import timer from './timer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...timer.state
  },
  mutations: {
    ...timer.mutations
  },
  actions: {
    ...timer.actions
  },
  getters: {
    ...timer.getters
  },
  modules: {
  }
})
