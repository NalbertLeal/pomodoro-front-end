import React from 'react'
import { Redirect } from 'react-router';

import './login_page.css'
import Button from '../../core/components/button'
import Link from '../../core/components/link'
import Input from '../../core/components/input'

import Login from '../../../domain/use_cases/Login'
import InvalidUser from '../../../exceptions/InvalidUser'
import UserNotFound from '../../../exceptions/UserNotFound'

class LoginPage extends React.Component {

  constructor() {
    super()
    
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      openModal: {open: false, msg: ''},
      shouldGoRegister: false,
      isLoged: tokenLS || tokenSS ? true : false,
    }
  }

  async makeLogin(email, password, rememberMe) {
    try {
      const login = new Login()
      await login.execute(email, password, rememberMe)
      this.setState({ isLoged: true })
    } catch(e) {
      if (e instanceof UserNotFound){
        this.setState({ openModal: {open: true, msg: 'User not found.'} })
        console.error()
      } else if(e instanceof InvalidUser) {
        this.setState({ openModal: {open: true, msg: 'Ivalid user, verify your credentials.'} })
        console.error()
      }
    }
  }
  
  goToRegister(e) {
    e.preventDefault()
    this.setState({ shouldGoRegister: true })
  }

  render() {
    if (this.state.isLoged) {
      return <Redirect to="/pomodoro"></Redirect>
    }

    return (
      <section className="login-page d-flex justify-content-center align-items-center">
        {
          this.state.openModal.open &&
          <div className="w-50 p-3 bg-white border zindex-modal position-absolute">
            <p> { this.state.openModal.msg } </p>
            <Button label="Close" onClick={ () => this.setState({ openModal: {open: false, msg: ''} }) }></Button>
          </div>
        }
        {
          this.state.shouldGoRegister &&
          <Redirect to="/register"></Redirect>
        }
        {
          this.state.isLoged &&
          <Redirect to="/pomodoro"></Redirect>
        }
        <article className="container w-25 p-3 border">
          <h2 className="mb-3">Login</h2>
          <Input inputType="email" label="Email" onClick={(v) => this.setState({ email: v })}></Input>
          <Input inputType="password" label="Password" onClick={(v) => this.setState({ password: v })}></Input>
          <div className="form-group form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember"  onChange={(e) => this.setState({ rememberMe: e.target.value }) }></input> Remember me
            </label>
          </div>
          <p> Don't have an account? <Link label="Register" onClick={(e) => this.goToRegister(e)}></Link> now! </p>
          <Button label="Login" onClick={() => this.makeLogin(this.state.email, this.state.password, this.state.rememberMe)}></Button>
        </article>
      </section>
    )
  }
}

export default LoginPage