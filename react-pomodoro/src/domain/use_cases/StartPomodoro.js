import PomodoroRepository from '../../data/repositories/PomodoroRepository'

class StartPomodoro {
  constructor() {
    this.pomodoroRepository = new PomodoroRepository()
  }

  execute(newUiCallback) {
    this.pomodoroRepository.uiCallback = newUiCallback
    this.pomodoroRepository.startTimer()
  }
}

export default StartPomodoro