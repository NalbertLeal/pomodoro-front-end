let pomodoroStages = [
  'work',
  'short break',
  'work',
  'short break',
  'work',
  'short break',
  'work4',
  'long break'
]

class PomodoroRepository {
  static pomodoroStage = 0
  static timer = null
  static remainTime = 1500000
  static _uiCallback = null

  set uiCallback(newUiCallback) {
    PomodoroRepository._uiCallback = newUiCallback
  }
  
  startTimer() {
    if (PomodoroRepository.timer === null) PomodoroRepository.timer = setInterval(this._pomodoro, 1000);
  }

  pauseTimer() {
    if (PomodoroRepository.timer !== null) {
      clearInterval(PomodoroRepository.timer)
      PomodoroRepository.timer = null
    }
  }

  resetTimer() {
    if (PomodoroRepository.timer !== null) clearInterval(PomodoroRepository.timer)
    PomodoroRepository.timer = null

    PomodoroRepository.pomodoroStage = 0
    PomodoroRepository.remainTime = 1500000

    const currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]

    const fromMiliToSec = (PomodoroRepository.remainTime / 1000)
    const minutes = Math.floor(fromMiliToSec / 60)
    const seconds = Math.floor(fromMiliToSec % 60)
    const parsedTime = `${minutes} minutes ${seconds < 0 ? 0 : seconds} seconds`

    PomodoroRepository._uiCallback(parsedTime, currentStateStr)
  }

  parseTimeToStr() {
  }

  _pomodoro() {
    let currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]
    if (currentStateStr === 'work' && PomodoroRepository.remainTime === 0) {
      PomodoroRepository.remainTime = 300000 // 300 seconds or 5 minutes -> rest time
      PomodoroRepository.pomodoroStage++
      currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]
      this.pauseTimer()
      this.startTimer()
    } else if (currentStateStr === 'short break' && PomodoroRepository.remainTime === 0) {
      PomodoroRepository.remainTime = 1500000 // 1500 seconds or 25 minutes -> work time
      PomodoroRepository.pomodoroStage++
      currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]
      this.pauseTimer()
      this.startTimer()
    }  else if (currentStateStr === 'work4' && PomodoroRepository.remainTime === 0) {
      PomodoroRepository.remainTime = 900000 // 900 seconds or 15 minutes -> long rest time
      PomodoroRepository.pomodoroStage++
      currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]
      this.pauseTimer()
      this.startTimer()
    } else if (currentStateStr === 'long break' && PomodoroRepository.remainTime === 0) {
      PomodoroRepository.remainTime = 1500000 // 300 seconds -> work time
      PomodoroRepository.pomodoroStage = 0
      currentStateStr = pomodoroStages[PomodoroRepository.pomodoroStage]
      this.pauseTimer()
      this.startTimer()
    }

    PomodoroRepository.remainTime--

     const fromMiliToSec = (PomodoroRepository.remainTime / 1000)
     const minutes = Math.floor(fromMiliToSec / 60)
     const seconds = Math.floor(fromMiliToSec % 60)
   
     const parsedTime = `${minutes} minutes ${seconds < 0 ? 0 : seconds} seconds`
     console.log(PomodoroRepository.remainTime)
    PomodoroRepository._uiCallback(parsedTime, currentStateStr)
  }
}

export default PomodoroRepository