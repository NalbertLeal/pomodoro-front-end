import React from 'react'
import { Redirect } from 'react-router';

import './RecoverUserPasswordPage.css'
import store from "../../store/store.js";

export default class RecoverUserPassword extends React.Component {
  constructor(props) {

    this.props = props
    this.state = {
      email: ''
    }

    this.updateEmail = this.updateEmail.bind(this)
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  snedEmail() {}
  
  render() {
    return <section id="recover-password">
      <div class="email-box">
        <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
        <Button label="Send email" onClick={() => { }} />
      </div>
    </section>
  }
}