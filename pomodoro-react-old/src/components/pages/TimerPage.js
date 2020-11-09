import React from 'react'
import { Redirect } from 'react-router';

import './TimerPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'
import Timer from '../basics/Timer'

class TimerPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTimer: null,
      currentTimer: null,
      taskText: '',
      toDoTasks: [],
      doneTasks: 0,
      pomodoroCurrentStage: 0,
      shortRestDiv: '',
      longRestDiv: '',
      workTimeDiv: 'pomodoro-stage-active'
    }

    this.updateTaskText = this.updateTaskText.bind(this)
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

  updateTaskText(event) {
    this.setState({
      taskText: event.target.value
    })
  }

  redirectToProfile() {
    return <Redirect to={this.state.timerRoute} />
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return true
    return false
  }

  ifNotAuthenticatedGoToLogin() {
    if (!this.isAuthenticated()) return <Redirect to='/' />
  }

  render() {
    return <section id="timer-page">
      {/* {this.ifNotAuthenticatedGoToLogin()} */}

      <Timer />

      <div className="tasks-indicator">
        <p className="total-tasks">Total tasks: {this.state.toDoTasks.length}</p>
        <p className="tasksdone-">Done tasks: {this.state.doneTasks}</p>
      </div>

      <Input label="New Task text" value={this.state.taskText} onChange={this.updateTaskText} type="text" />

      <Button label="Create new task" />
    </section>
  }
}

export default TimerPage