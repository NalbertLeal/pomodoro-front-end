import PomodoroRepository from '../../data/repositories/PomodoroRepository'

class ResetPomodoro {
  constructor() {
    this.pomodoroRepository = new PomodoroRepository()
  }

  execute() {
    pomodoroRepository.resetTimer()
  }
}

export default ResetPomodoro