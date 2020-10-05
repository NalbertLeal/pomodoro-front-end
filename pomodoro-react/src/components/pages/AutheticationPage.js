import React from 'react'
import { Redirect } from 'react-router';

import './AutheticationPage.css'
import store from "../../store/store.js";

import Input from '../basics/Input'
import Figure from '../basics/Figure'
import Button from '../basics/Button'

class AutheticationPage extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      timerRoute: '/timer'
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
    if (currentUser && currentUser.length > 0) return <Redirect to='/timer' />
  }

  render() {
    return <section id="authentication-page">
      {this.isAuthenticated()}

      <Figure src="https://doc.rust-lang.org/rust-logo1.46.0.png" alt="projet logo" />

      <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
      <Input label="Password" value={this.state.password} onChange={this.updatePassword} type="password" classValue="margin-4rem"/>

      <Button label="Login" />
      <Button label="Create my account"/>
      <Button label="Forgot my password" />
    </section>
  }
}

export default AutheticationPage