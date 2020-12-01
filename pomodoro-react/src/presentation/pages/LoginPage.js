import React, { useState } from 'react'
import { Redirect } from 'react-router';

import './LoginPage.css'
import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'
import Modal from '../basics/Modal'

import isAuthenticated from '../../utils/isAuthenticated'
import Login from '../../domain/use_cases/Login'
import Email from '../../domain/entities/value_ojects/Email'
import Password from '../../domain/entities/value_ojects/Password'

async function login(email, password, setToPomodoroPage, setOpenModal) {
  const emailValidator = new Email(email)
  const passwordValidator = new Password(password)
  if (!emailValidator.isValid || !passwordValidator.isValid) {
    setOpenModal(true)
    return
  }

  const loginUseCase = new Login()
  try {
    await loginUseCase.execute(email, password)
    setToPomodoroPage(true)
  } catch (e) {
    setToPomodoroPage(false)
  }
}

function toPomodoro() {
  console.log('okok')
  return <Redirect to="/pomodoro" />
}

function LoginPage() {
  const [toPomodoroPage, setToPomodoroPage] = useState(false)
  const [openModal, setOpenModal, modal] = Modal('Invalid form data!', 'use a valid email and verify if the password is the same to both fields')
  const [email, setEmail, emailInput] = Input('email', 'email')
  const [password, setPassword, passwordInput] = Input('password', 'password')

  const onCLickLogin = () => login(email, password, setToPomodoroPage, setOpenModal)

  if (isAuthenticated() || toPomodoroPage) {
    return <Redirect to='/pomodoro' />
  }

  return <div id="login-page">
    {modal}
    <section id="login">
      <article>
        {emailInput}
        {passwordInput}
      </article>
      {Button('Enter', () => onCLickLogin())}
      <p className="or">or</p>
      <p>
        <Link href="/register-new-user" label="register"></Link> now!!! it's free!!!
      </p>
    </section>
  </div>
}

export default LoginPage