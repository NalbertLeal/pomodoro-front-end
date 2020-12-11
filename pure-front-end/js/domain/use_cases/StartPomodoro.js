import PomodoroRepository from '../../data/repositories/PomodoroRepository'

class StartPomodoro {
  constructor() {
    this.pomodoroRepository = new PomodoroRepository()
  }

  execute(newUiCallback) {
    pomodoroRepository.startuiCallbackTimer = newUiCallback
    pomodoroRepository.startTimer()
  }
}

export default StartPomodoro