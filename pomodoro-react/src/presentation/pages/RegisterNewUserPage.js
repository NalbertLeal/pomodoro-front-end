import React, { useState } from 'react'
import { Redirect } from 'react-router';

import './RegisterNewUserPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'

import isAuthenticated from '../../utils/isAuthenticated'
import User from '../../domain/entities/User'
import RegisterNewUser from '../../domain/use_cases/RegisterNewUser'

async function register(name, email, password, setToPomodoroPage) {
  if (password !== setToPomodoroPage) {
    // ERROR SENHAS NÃO SÂO IGUAIS
  }

  const user = new User(name, email, password, setToPomodoroPage)
  console.log(user.isValid)
  if (!user.isValid) {
    // USER IS INVALID
    console.log('USER IS INVALID')
    return
  }

  const registerNewUser = new RegisterNewUser()
  
  try {
    await registerNewUser.execute(email, password)
    setToPomodoroPage(true)
  } catch (e) {
    console.log(e)
    setToPomodoroPage(false)
  }
}

function CreateNewUserPage() {
  const [toPomodoroPage, setToPomodoroPage] = useState(false)
  const [name, setName, nameInput] = Input('Name', 'text')
  const [email, setEmail, emailInput] = Input('email', 'email')
  const [password, setPassword, passwordInput] = Input('password', 'password')
  const [rpassword, setRPassword, rpasswordInput] = Input('Repeat password', 'password')

  if (isAuthenticated() || toPomodoroPage) {
    return <Redirect to='/pomodoro' />
  }

  return <div id="register-page">
  <section id="register">
    {/* <form> */}
      <article>
        {nameInput}
        {emailInput}
        {passwordInput}
        {rpasswordInput}
      </article>
      <label id="accept-terms-checkbox" className="matter-checkbox">
        <input type="checkbox" />
        <span>I accept all the <Link href="" label="terms"></Link></span>
      </label>
      {Button('Register', () => register(name, email, password, rpassword, setToPomodoroPage))}
    {/* </form> */}
  </section>
</div>
}

export default CreateNewUserPage