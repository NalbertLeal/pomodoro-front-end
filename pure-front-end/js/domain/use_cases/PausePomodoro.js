import PomodoroRepository from '../../data/repositories/PomodoroRepository'

class PausePomodoro {
  constructor() {
    this.pomodoroRepository = new PomodoroRepository()
  }

  execute() {
    pomodoroRepository.pauseTimer()
  }
}

export default PausePomodoro