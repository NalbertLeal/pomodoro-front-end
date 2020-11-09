import { MutationTree } from 'vuex'
import { State } from './types'

export const mutations: MutationTree<State> = {
  stopTimer(state) {
    clearInterval(state.timerID)
  },
  tick(state) {
    state.currentTimer = new Date()
    
    const timePassed = state.currentTimer.getTime() - state.initialTimer.getTime()
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    if (minutes === 5 && state.pomodoroCurrentStage % 2 === 1) {
      state.pomodoroCurrentStage = state.pomodoroCurrentStage + 1,
      state.shortRestDiv = false,
      state.workTimeDiv = true//'pomodoro-stage-active'
    } else if (minutes === 15
      && state.pomodoroCurrentStage === 7) {
      state.pomodoroCurrentStage = 0,
      state.shortRestDiv = false,
      state.workTimeDiv = true
    } else if (minutes === 25
      && state.pomodoroCurrentStage === 6) {
      state.pomodoroCurrentStage = 0,
      state.longRestDiv = true,
      state.workTimeDiv = false
    } else if (minutes === 25) {
      state.pomodoroCurrentStage = state.pomodoroCurrentStage + 1,
      state.shortRestDiv = true,
      state.workTimeDiv = false
    }
  }
}