import React from 'react'
import { Redirect } from 'react-router';

import './RecoverUserPasswordPage.css'
import store from "../../store/store.js";

import Input from '../basics/Input'

// export default class RecoverUserPassword extends React.Component {
//   constructor(props) {

//     this.props = props
//     this.state = {
//       email: ''
//     }

//     this.updateEmail = this.updateEmail.bind(this)
//   }

//   updateEmail(event) {
//     this.setState({
//       email: event.target.value
//     })
//   }

//   snedEmail() {}
  
//   render() {
//     return <section id="recover-password">
//       <div class="email-box">
//         <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
//         <Button label="Send email" onClick={() => { }} />
//       </div>
//     </section>
//   }
// }

function RecoverUserPassword() {
  const [emailValue, setEmail, emailInput] = Input('email', 'email')

  return <section id="recover-password">
    <div class="email-box">
      {emailInput}
      <Button label="Send email" onClick={() => { }} />
    </div>
  </section>
}

export default RecoverUserPassword