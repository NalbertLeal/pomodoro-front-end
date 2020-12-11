import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';

import Input from '../basics/Input'
import Button from '../basics/Button'
import Timer from '../basics/Timer'

import './PomodoroPage.css'
import Logout from '../../domain/use_cases/Logout'
import isAuthenticated from '../../utils/isAuthenticated'
import StartPomodoro from '../../domain/use_cases/StartPomodoro'
import PausePomodoro from '../../domain/use_cases/PausePomodoro'
import ResetPomodoro from '../../domain/use_cases/ResetPomodoro'

class PomodoroPage extends React.Component {

  state = {
    time: '25 minutes 0 seconds',
    state: 'work'
  }

  constructor(props) {
    super(props)

    this.uiCallback = this.uiCallback.bind(this)
    this.startPomodoro = this.startPomodoro.bind(this)
    this.stopPomodoro = this.stopPomodoro.bind(this)
    this.resetPomodoro = this.resetPomodoro.bind(this)
    this.ifNotAuthenticatedGoToLogin = this.ifNotAuthenticatedGoToLogin.bind(this)
    this.logout = this.logout.bind(this)
  }

  uiCallback(newTime, newStage) {
    this.setState({
      stage: newStage,
      time: newTime
    })
  }

  startPomodoro() {
    let s = new StartPomodoro()
    s.execute(this.uiCallback)
  }
  
  stopPomodoro() {
    let s = new PausePomodoro()
    s.execute()
  }
  
  resetPomodoro() {
    let r = new ResetPomodoro()
    r.execute()
  }

  ifNotAuthenticatedGoToLogin() {
    if (!isAuthenticated()) return true
    else return false
  }

  async logout() {
    try {
      if (this.state.isLogout) {
        this.setState({})
        return
      }
      const logoutUseCase = new Logout()
      await logoutUseCase.execute()
      this.setState({})
    } catch(e) {
      console.error(e)
    }
    this.setState({})
  }

  render() {
    if (this.ifNotAuthenticatedGoToLogin()) {
      return <Redirect to='/' />
    }
    
    return (<div id="pomodoro-page">
      <header>
        <button id="logout-btn" className="matter-button-contained" onClick={() => this.logout()}>Logout</button>
      </header>
      <section id="pomodoro">
        <article id="time">
          { this.state.time }
        </article>
        <article id="controls">
          <button id="play-pause" className="matter-button-contained" onClick={() => this.startPomodoro()}>Play</button>
          <button id="stop" className="matter-button-contained" onClick={() => this.resetPomodoro()}>Stop</button>
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
    </div>)
  }
}

export default PomodoroPage