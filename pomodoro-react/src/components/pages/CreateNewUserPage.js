import React from 'react'
import { Redirect } from 'react-router';

import './AutheticationPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'

class CreateNewUserPage extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      repeatPassword: ''
    }

    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateRepeatPassword = this.updateRepeatPassword.bind(this)
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

  updateRepeatPassword(event) {
    this.setState({
      repeatPassword: event.target.value
    })
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return <Redirect to='/timer' />
  }

  render() {
    return <section id="authentication-page">
      {this.isAuthenticated()}

      <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
      <Input label="Password" value={this.state.password} onChange={this.updatePassword} type="password" />
      <Input label="Repeat password" value={this.state.repeatPassword} onChange={this.updateRepeatPassword} type="password" classValue="margin-4rem" />

      <Button label="Create new user" />
    </section>
  }
}

export default CreateNewUserPage