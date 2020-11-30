import React, { useState } from 'react'
import { Redirect } from 'react-router';

import './RegisterNewUserPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'
import Modal from '../basics/Modal'

import isAuthenticated from '../../utils/isAuthenticated'
import User from '../../domain/entities/User'
import RegisterNewUser from '../../domain/use_cases/RegisterNewUser'
import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

async function register(name, email, password, rpassword, setToPomodoroPage, setOpenModal1, setOpenModal2) {
  if (password !== rpassword) {
    // ERROR SENHAS: NÃO SÂO IGUAIS
    setOpenModal1(true, 'Senhas diferentes.')
  }

  const user = new User(name, email, password)
  if (!user.isValid) {
    // USER IS INVALID
    setOpenModal1(true)
    return
  }

  const registerNewUser = new RegisterNewUser()
  
  try {
    await registerNewUser.execute(user)
    setToPomodoroPage(true)
  } catch (e) {
    if (e instanceof UserAlreadyExists) setOpenModal2(true)
    setToPomodoroPage(false)
  }
}

function CreateNewUserPage() {
  const [toPomodoroPage, setToPomodoroPage] = useState(false)
  // const [openModal, setOpenModal] = useState([false, ''])
  const [openModal1, setOpenModal1, modal1] = Modal('Invalid form data!', 'use a valid email and verify if the password is the same to both fields')
  const [openModal2, setOpenModal2, modal2] = Modal('Sorry!', 'an user with this email already exists')

  const [name, setName, nameInput] = Input('Name', 'text')
  const [email, setEmail, emailInput] = Input('email', 'email')
  const [password, setPassword, passwordInput] = Input('password', 'password')
  const [rpassword, setRPassword, rpasswordInput] = Input('Repeat password', 'password')

  const onCLickRegister = () => register(name, email, password, rpassword, setToPomodoroPage, setOpenModal1, setOpenModal2)

  if (isAuthenticated() || toPomodoroPage) {
    return <Redirect to='/pomodoro' />
  }

  return <div id="register-page">
  <section id="register">
    {modal1}
    {modal2}
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
    {Button('Register', onCLickRegister)}
  </section>
</div>
}

export default CreateNewUserPage