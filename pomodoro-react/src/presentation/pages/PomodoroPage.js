import React from 'react'
import { Redirect } from 'react-router';

import Input from '../basics/Input'
import Button from '../basics/Button'
import Timer from '../basics/Timer'

import './PomodoroPage.css'
import Logout from '../../domain/use_cases/Logout'
import isAuthenticated from '../../utils/isAuthenticated'

function ifNotAuthenticatedGoToLogin() {
  if (!isAuthenticated()) return true
  else return false
}

class PomodoroPage extends React.Component {
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
      workTimeDiv: 'pomodoro-stage-active',
      isLogout: false
    }

    this.updateTaskText = this.updateTaskText.bind(this)
    this.logout = this.logout.bind(this)
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

  async logout() {
    if (this.state.IsLogout) return
    const logoutUseCase = new Logout()
    await logoutUseCase.execute()
    this.setState({
      isLogout: true
    })
  }

  render() {
    if (ifNotAuthenticatedGoToLogin()) {
      return <Redirect to='/' />
    }
    
    return <div id="pomodoro-page">
      <header>
        <button id="logout-btn" className="matter-button-contained" onClick={this.logout}>Logout</button>
      </header>
      <section id="pomodoro">
        <article id="time">
          00 min 00 sec
        </article>
        <article id="controls">
          <button id="stop" className="matter-button-contained">Stop</button>
          <button id="play-pause" className="matter-button-contained">Play</button>
        </article>
        <article id="pomodoro-stages">
          <article className="pomodoro-stage matter-button-outlined">Work time</article>
          <article className="pomodoro-stage matter-button-outlined">Short Break</article>
          <article className="pomodoro-stage matter-button-outlined">Long Break</article>
        </article>
      </section>
      <section id="tasks">
        <article className="task">
          <button id="delete-task-1" className="matter-button-contained">X</button>
          <p>Title 1</p>
          <p>Description of the task</p>
        </article>
        <article className="task">
          <button id="delete-task-2" className="matter-button-contained">X</button>
          <p>Title 2</p>
          <p>Description of the task</p>
        </article>
        <article className="task">
          <button id="delete-task-3" className="matter-button-contained">X</button>
          <p>Title 3</p>
          <p>Description of the task</p>
        </article>
      </section>
    </div>
  }
}

export default PomodoroPage