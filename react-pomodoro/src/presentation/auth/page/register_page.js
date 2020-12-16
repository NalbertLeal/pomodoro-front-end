import React from 'react'
import { Redirect } from 'react-router';

import './register_page.css';
import Button from '../../core/components/button'
import Input from '../../core/components/input'

import RegisterNewUser from '../../../domain/use_cases/RegisterNewUser'
import User from '../../../domain/entities/User';
import InvalidUser from '../../../exceptions/InvalidUser'
import UserAlreadyExists from '../../../exceptions/UserAlreadyExists'

class LoginPage extends React.Component {
  constructor() {
    super()
    
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')

    this.state = {
      name: '',
      email: '',
      password: '',
      rpassword: '',
      rememberMe: false,
      openModal: {open: false, msg: ''},
      shouldGoPomodoro: false,
      isLoged: tokenLS || tokenSS ? true : false,
    }
  }

  async registerNewUser(name, email, password, rpassword, rememberMe) {
    try {
      if (password !== rpassword) {
        this.setState({ openModal: {open: true, msg: 'Different passwords'} })
        return
      }
  
      const user = new User(name, email, password)
      if (!user.isValid) {
        throw new InvalidUser()
      }
     
      const registerNewUser = new RegisterNewUser()
      await registerNewUser.execute(user, rememberMe)
      this.setState({ isLoged: true })
    } catch(e) {
      if(e instanceof InvalidUser) {
        this.setState({ openModal: {open: true, msg: 'Invalid user, verify the fields formats.'} })
        console.error('invalid user')
      }
      if(e instanceof UserAlreadyExists) {
        this.setState({ openModal: {open: true, msg: 'User with this email already register.'} })
        console.error('user already exists')
      }
    }
  }

  render() {
    if (this.state.isLoged) {
      return <Redirect to="/pomodoro"></Redirect>
    }

    return (
      <section className="register-page d-flex justify-content-center align-items-center">
        {
          this.state.openModal.open &&
          <div className="w-50 p-3 bg-white border zindex-modal position-absolute">
            <p> {this.state.openModal.msg} </p>
            <button type="button" className="btn btn-primary" onClick={() =>  this.setState({ openModal: {open: false, msg: ''} }) }>Close</button>
          </div>
        }
        <article className="container w-25 border">
          <h2>Register</h2>
          <Input inputType="text" label="Name" onClick={(v) => this.setState({ name: v })}></Input>
          <Input inputType="email" label="Email" onClick={(v) => this.setState({ email: v })}></Input>
          <Input inputType="password" label="Password" onClick={(v) => this.setState({ password: v })}></Input>
          <Input inputType="password" label="Repeat Password" onClick={(v) => this.setState({ rpassword: v })}></Input>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember"  onChange={(e) => this.setState({ rememberMe: e.target.value }) }></input> Remember me
            </label>
          </div>
          <Button label="Register" onClick={ () => this.registerNewUser(this.state.name, this.state.email, this.state.password, this.state.rpassword, this.state.rememberMe) }></Button>
        </article>
      </section>
    )
  }
}

export default LoginPage