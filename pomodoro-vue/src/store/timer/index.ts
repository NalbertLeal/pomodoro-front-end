import { Module } from 'vuex';

import { RootState } from '../types'
import { State } from './types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const state: State = {
  timerID: 0,
  initialTimer: new Date(),
  currentTimer: new Date(),  
  toDoTasks: [],
  doneTasks: 0,
  pomodoroCurrentStage: 0,
  shortRestDiv: false,
  longRestDiv: false,
  workTimeDiv: true
}

const namespaced: boolean = true;

export const timer: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}