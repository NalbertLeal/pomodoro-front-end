import React from 'react'

import './AutheticationPage.css'

// import LoginBox from '../components/LoginBox'

class AutheticationPage extends React.Component {
  constructor(props) {
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
      email: event.target.value
    })
  }

  render() {
    return <section id="authentication-page">
      <figure class="logo-figure">
        <img 
          src="https://doc.rust-lang.org/rust-logo1.46.0.png" 
          alt="projet logo"
        >
        </img>
        {/* <figcaption>Journaling with Tea</figcaption> */}
      </figure>
      
      <label>
        <p> Email: </p>
        <input  
          class="auth-input"
          placeholder="email"
          value={this.state.email} 
          onChange={this.updateEmailInState}
        />
      </label>

      <label>
        <p> Password: </p>
        <input  
          class="auth-input"
          placeholder="password"
          value={this.state.password} 
          onChange={this.updatePassword}
        />
      </label>

      <button 
        class="create-account-btn"
      >
        Create my account
      </button>
      <button 
        class="forgot-password-btn"
      >
        Forgot my password
      </button>
    </section>
  }
}

export default AutheticationPage