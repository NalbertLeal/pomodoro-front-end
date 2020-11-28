import React from 'react'
import { Redirect } from 'react-router';

import './RegisterNewUserPage.css'

import Input from '../basics/Input'
import Button from '../basics/Button'
import Link from '../basics/Link'

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
    return <div id="register-page">
      {this.isAuthenticated()}

      <section id="register">
        <form action="" method="post">
          <article>
            <Input label="Email"></Input>
            <Input label="Password"></Input>
            <Input label="Repeat password"></Input>
          </article>
          <label id="accept-terms-checkbox" className="matter-checkbox">
            <input type="checkbox" />
            <span>I accept all the <Link href="" label="terms"></Link></span>
          </label>
          <Button label="Register"></Button>
        </form>
      </section>
    </div>
  }
}

export default CreateNewUserPage