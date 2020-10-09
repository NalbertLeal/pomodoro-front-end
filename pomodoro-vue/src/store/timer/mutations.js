export default {
  startTimer(store) {
    initialTimer = new Date()

    timerID = setInterval(
      () => {
        tick(store)
        definePomodoroStage()
      },
      1000
    );
  },
  stopTimer(store) {
    clearInterval(timerID)
  },
  tick(store, minutes) {
    store.currentTimer = new Date()
    
    const timePassed = store.currentTimer - store.initialTimer
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    if (minutes === 5 && store.pomodoroCurrentStage % 2 === 1) {
      store.pomodoroCurrentStage = store.pomodoroCurrentStage + 1,
      store.shortRestDiv = '',
      store.workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 15
      && store.pomodoroCurrentStage === 7) {
      store.pomodoroCurrentStage = 0,
      store.shortRestDiv = '',
      store.workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 25
      && store.pomodoroCurrentStage === 6) {
      store.pomodoroCurrentStage = 0,
      store.longRestDiv = 'pomodoro-stage-active',
      store.workTimeDiv = ''
    } else if (minutes === 25) {
      store.pomodoroCurrentStage = store.pomodoroCurrentStage + 1,
      store.shortRestDiv = 'pomodoro-stage-active',
      store.workTimeDiv = ''
    }
  }
}