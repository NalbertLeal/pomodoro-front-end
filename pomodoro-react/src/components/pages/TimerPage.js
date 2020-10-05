import React from 'react'
import { Redirect } from 'react-router';

import './TimerPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'

class TimerPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTimer: null,
      currentTimer: null,
      taskText: ''
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

  startTimer() {
    this.setState({
      initialTimer: new Date()
    })

    this.timerID = setInterval(
      () => this.tick(),
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
    const timePassed = this.state.currentTimer - this.state.initialTimer

    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    return `${minutes} : ${seconds}`
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

      <p>{this.parseTick()}</p>

      <Input label="New Task text" value={this.state.taskText} onChange={this.updateTaskText} type="text" />

      <Button label="Create new task" />
    </section>
  }
}

export default TimerPage