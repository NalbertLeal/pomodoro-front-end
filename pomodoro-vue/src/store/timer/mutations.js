export default {
  stopTimer(state) {
    clearInterval(state.timerID)
  },
  tick(state) {
    state.currentTimer = new Date()
    
    const timePassed = state.currentTimer - state.initialTimer
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    if (minutes === 5 && state.pomodoroCurrentStage % 2 === 1) {
      state.pomodoroCurrentStage = state.pomodoroCurrentStage + 1,
      state.shortRestDiv = '',
      state.workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 15
      && state.pomodoroCurrentStage === 7) {
      state.pomodoroCurrentStage = 0,
      state.shortRestDiv = '',
      state.workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 25
      && state.pomodoroCurrentStage === 6) {
      state.pomodoroCurrentStage = 0,
      state.longRestDiv = 'pomodoro-stage-active',
      state.workTimeDiv = ''
    } else if (minutes === 25) {
      state.pomodoroCurrentStage = state.pomodoroCurrentStage + 1,
      state.shortRestDiv = 'pomodoro-stage-active',
      state.workTimeDiv = ''
    }
  }
}