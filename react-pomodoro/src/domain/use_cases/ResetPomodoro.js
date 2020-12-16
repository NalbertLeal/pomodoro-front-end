import PomodoroRepository from '../../data/repositories/PomodoroRepository'

class ResetPomodoro {
  constructor() {
    this.pomodoroRepository = new PomodoroRepository()
  }

  execute() {
    this.pomodoroRepository.resetTimer()
  }
}

export default ResetPomodoro