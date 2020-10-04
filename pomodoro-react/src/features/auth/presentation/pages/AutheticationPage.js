import React from 'react'

import { Redirect } from 'react-router';

import './AutheticationPage.css'

// core/presentation
import Input from '../../../../core/components/Input'
import Figure from '../../../../core/components/Figure'
import Button from '../../../../core/components/Button'

class AutheticationPage extends React.Component {
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
    return <Redirect to="/timer" />
  }

  render() {
    return <section id="authentication-page">
      {this.isAuthenticated()}

      <Figure src="https://doc.rust-lang.org/rust-logo1.46.0.png" alt="projet logo" />

      <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
      <Input label="Password" value={this.state.password} onChange={this.updatePassword} type="password" />

      <Button label="Login" color="deep-red-200" />
      <Button label="Create my account" color="deep-green-200" />
      <Button label="Forgot my password" color="deep-blue-200" />
    </section>
  }
}

export default AutheticationPage