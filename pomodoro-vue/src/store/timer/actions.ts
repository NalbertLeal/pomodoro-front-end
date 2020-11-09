import { ActionTree } from 'vuex'
import { State } from './types'
import { RootState } from '../types'
 
export const actions: ActionTree<State, RootState> = {
  startTimer({ commit, state}) {
    state.initialTimer = new Date()

    state.timerID = setInterval(
      () => {
        commit('tick')
      },
      1000
    );
  },
  stopTimer({ commit }) {
    commit('stopTimer')
  }
}