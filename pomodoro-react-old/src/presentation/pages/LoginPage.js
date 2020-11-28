import React from 'react'
import { Redirect } from 'react-router';

import './LoginPage.css'
// import store from "../../store/store.js";

import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'

class LoginPage extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return <Redirect to='/pomodoro' />
  }

  render() {
    return <div id="login-page">
      <Redirect to='/pomodoro' />
      {this.isAuthenticated()}
      
      <section id="login">
        <form action="" method="get">
          <article>
            <Input label="Email"></Input>
            <Input label="Password"></Input>
          </article>
          <Button label="Enter"></Button>
        </form>
        <p className="or">or</p>
        <p>
          <Link href="/register-new-user" label="register"></Link> now!!! it's free!!!
        </p>
      </section>
    </div>
  }
}

export default LoginPage