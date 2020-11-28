import React from 'react'

import './Home.css';

class Home extends React.Component {
 render() {
    return (
      <section id="login">
        <form action="" method="get">
          <article>
            <label id="normal" class="matter-textfield-standard">
              <input placeholder=" "/>
              <span>Email</span>
            </label>
            <label id="normal" class="matter-textfield-standard">
              <input placeholder=" "/>
              <span>Password</span>
            </label>
          </article>
          <button id="login-btn" class="matter-button-contained" type="submit">Enter</button>
        </form>
        <p class="or">or</p>
        <p><a class="matter-link" href="./register.html" style="font-size: large;">register</a> now!!! it's free!!!</p>
      </section>
    );
  }
}

export default Home