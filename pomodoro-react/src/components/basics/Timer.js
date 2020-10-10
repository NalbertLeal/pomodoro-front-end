import React from 'react'

import './Timer.css'

class TimerPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTimer: null,
      currentTimer: null,
      taskText: '',
      pomodoroCurrentStage: 0,
      shortRestDiv: '',
      longRestDiv: '',
      workTimeDiv: 'pomodoro-stage-active'
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    if (this.TimerID) {
      this.stopTimer()
    }
  }

  calculateTimerMinuterSeconds() {
    const timePassed = this.state.currentTimer - this.state.initialTimer

    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    return [minutes, seconds]
  }

  definePomodoroStage() {
    const [minutes] = this.calculateTimerMinuterSeconds()

    if (minutes === 5 && this.state.pomodoroCurrentStage % 2 === 1) {
      this.setState({
        pomodoroCurrentStage: this.state.pomodoroCurrentStage + 1,
        shortRestDiv: '',
        workTimeDiv: 'pomodoro-stage-active'
      })
    } else if (minutes === 15
      && this.state.pomodoroCurrentStage === 7) {
      this.setState({
        pomodoroCurrentStage: 0,
        shortRestDiv: '',
        workTimeDiv: 'pomodoro-stage-active'
      })
    } else if (minutes === 25
      && this.state.pomodoroCurrentStage === 6) {
      this.setState({
        pomodoroCurrentStage: 0,
        longRestDiv: 'pomodoro-stage-active',
        workTimeDiv: ''
      })
    } else if (minutes === 25) {
      this.setState({
        pomodoroCurrentStage: this.state.pomodoroCurrentStage + 1,
        shortRestDiv: 'pomodoro-stage-active',
        workTimeDiv: ''
      })
    }
  }

  startTimer() {
    this.setState({
      initialTimer: new Date()
    })

    this.timerID = setInterval(
      () => {
        this.tick()
        this.definePomodoroStage()
      },
      1000
    );
  }

  stopTimer() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      currentTimer: new Date()
    })
  }

  parseTick() {
    const [minutes, seconds] = this.calculateTimerMinuterSeconds()

    return `${minutes} : ${seconds < 0 ? 0 : seconds}`
  }

  render() {
    return <div id="timer">
      {/* {this.ifNotAuthenticatedGoToLogin()} */}

      <p>{this.parseTick()}</p>

      <div className="pomodoro-stages">
        <div id="pomodoro-short-rest" className={`pomodoro-stage ${this.state.shortRestDiv}`}>Short Rest</div>
        <div id="pomodoro-long-rest" className={`pomodoro-stage ${this.state.longRestDiv}`}>Long Rest</div>
        <div id="pomodoro-work-time" className={`pomodoro-stage ${this.state.workTimeDiv}`}>Work Time</div>
      </div>

      <div id="time-bar" />
    </div>
  }
}

export default TimerPage