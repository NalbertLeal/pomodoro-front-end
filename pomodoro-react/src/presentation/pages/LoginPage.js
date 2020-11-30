import React, { useState } from 'react'
import { Redirect } from 'react-router';

import './LoginPage.css'
import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'

import isAuthenticated from '../../utils/isAuthenticated'
import Login from '../../domain/use_cases/Login'

async function login(email, password, setToPomodoroPage) {
  const loginUseCase = new Login()
  
  try {
    await loginUseCase.execute(email, password)
    setToPomodoroPage(true)
  } catch (e) {
    console.log(e)
    setToPomodoroPage(false)
  }
}

function toPomodoro() {
  console.log('okok')
  return <Redirect to="/pomodoro" />
}

function LoginPage() {
  const [toPomodoroPage, setToPomodoroPage] = useState(false)
  const [email, setEmail, emailInput] = Input('email', 'email')
  const [password, setPassword, passwordInput] = Input('password', 'password')

  if (isAuthenticated() || toPomodoroPage) {
    return <Redirect to='/pomodoro' />
  }

  return <div id="login-page">
      <section id="login">
        <article>
          {emailInput}
          {passwordInput}
        </article>
        {Button('Enter', () => login(email, password, setToPomodoroPage))}
        <p className="or">or</p>
        <p>
          <Link href="/register-new-user" label="register"></Link> now!!! it's free!!!
        </p>
      </section>
    </div>
}

export default LoginPage