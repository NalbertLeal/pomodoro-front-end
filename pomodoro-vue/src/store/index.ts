import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'

import { timer } from './timer/index'

Vue.use(Vuex)

export const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    timer
  }
}

export default new Vuex.Store<RootState>(store);

// export default new Vuex.Store({
//   state: {
//     ...timer.state
//   },
//   mutations: {
//     ...timer.mutations
//   },
//   actions: {
//     ...timer.actions
//   },
//   getters: {
//     ...timer.getters
//   },
//   modules: {
//   }
// })
