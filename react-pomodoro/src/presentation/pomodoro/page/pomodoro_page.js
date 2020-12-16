import React, { useState } from 'react'
import { Redirect } from 'react-router';

import './pomodoro_page.css';
import Button from '../../core/components/button'

import Logout from '../../../domain/use_cases/Logout'
import GetUserTasks from '../../../domain/use_cases/GetUserTasks'
import DeleteTask from '../../../domain/use_cases/DeleteTask'
import StartPomodoro from '../../../domain/use_cases/StartPomodoro'
import PausePomodoro from '../../../domain/use_cases/PausePomodoro'
import ResetPomodoro from '../../../domain/use_cases/ResetPomodoro'
import InvalidUser from '../../../exceptions/InvalidUser'
import User from '../../../domain/entities/User';
import { render } from '@testing-library/react';

class PomodoroPage extends React.Component {

  constructor() {
    super()
    
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')

    this.state = {
      timer: 1500000, 
      pomodoroStage: 'Work', 
      shouldGoNewTask: false, 
      isLoged: tokenLS || tokenSS ? true : false,
      tasks: []
    }

    this.startTimer = this.startTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  componentDidMount() {
    this.getTasks()
  }

  async logout() {
    try {
      const logout = new Logout()
      await logout.execute()
    } catch(e) {
      console.error(e)
    }
    this.setState({ isLoged: false })
  }

  async getTasks() {
    try {
      const getUserTasks = new GetUserTasks()
      const tasks = await getUserTasks.execute()
      this.setState({ tasks: tasks })
      console.log(this.state.tasks)
    } catch(e) {
      console.error(e)
    }
  }

  async deleteTask(taskId) {
    try {
      const deleteTask = new DeleteTask()
      await deleteTask.execute(taskId)
      const tasks = this.state.tasks.filter(e => {
        return e.id !== taskId
      })
      this.setState({ tasks: tasks })
    } catch(e) {
      console.error(e)
    }
  }
  
  parseMinutes() {
    const minutes = Math.floor((this.state.timer / 1000) / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }
  
  parseSeconds() {
    const seconds = Math.floor((this.state.timer / 1000) % 60)
    return seconds < 10 ? `0${seconds}` : seconds
  }
  
  startTimer() {
    const startPomodoro = new StartPomodoro()
    startPomodoro.execute((timer, stage) => {
      this.setState({
        timer: timer,
        pomodoroStage: stage
      })
    })
  }
  
  resetTimer() {
    const resetPomodoro = new ResetPomodoro()
    resetPomodoro.execute()
  }
  
  render() {
    if (!this.state.isLoged) {
      return <Redirect to="/"></Redirect>
    }

    return (
      <section className="pomodoro-page d-flex flex-column justify-content-start align-items-center">
        {
          this.state.shouldGoNewTask &&
          <Redirect to="/new-task"></Redirect>
        }
        <article className="timer w-100 p-3 mb-5 border d-flex justify-content-end">
          <Button label="Logout" onClick={() => this.logout()}></Button>
        </article>
        <article className="timer w-50 p-3 mb-3 border d-flex justify-content-center">
          <h3> {this.parseMinutes()} minutes {this.parseSeconds()} seconds </h3>
        </article>
        <article className="pomodoro-stage w-50 p-3 mb-3 border d-flex justify-content-center">
          Now its time to {this.state.pomodoroStage}
        </article>
        <article className="pomodoro-controls w-50 p-3 mb-3 border d-flex justify-content-around">
          <Button label="Start" onClick={() => this.startTimer()}></Button>
          <Button label="Reset" onClick={() => this.resetTimer()}></Button>
        </article>
        <article className="tasks w-50 p-3 border d-flex flex-column justify-content-around align-items-center">
          <Button label="New Task" onClick={() => this.setState({shouldGoNewTask: true})}></Button>
          {
            this.state.tasks?.map(e => {
              return (
                <article key={e.id} className="tasks-list w-100 mt-3 border p-2">
                  <span className="w-25"> <Button label="X" onClick={async () => await this.deleteTask(e.id)}></Button> </span>
                  <span className="w-75">{ e.description }</span>
                </article>
              )
            })
          }
        </article>
      </section>
    )
  }
}

export default PomodoroPage