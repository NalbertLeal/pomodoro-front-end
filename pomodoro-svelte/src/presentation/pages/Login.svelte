<script>
  import page from "page"

  import Button from '../basics/button.svelte'
  import Input from '../basics/input.svelte'
  import Link from '../basics/link.svelte'

  let getEmailValue = () => {}
  let getPasswordValue = () => {}

  let login = () => {
    page('/pomodoro')
  }
</script>

<style>
  #login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  button {
    margin: 0rem 0rem 1rem 0rem;
  }

  p {
    margin: 0rem 0rem 1rem 0rem;
  }

  #login {
    width: 18rem;
    /* height: 15rem; */
    box-shadow: 0rem 0rem 0.7rem #aac;
  }

  #login,
  #login form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #login article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
  }

  #login .or {
    text-align: center;
  }
</style>

<div id="login-page">
  <section id="login">
    <form action="" method="get">
      <article>
        <Input label="Email" getValue={getEmailValue}></Input>
        <Input label="Password" getValue={getPasswordValue}></Input>
      </article>
      <Button label="Enter" onClick={login}></Button>
      <!-- <button id="login-btn" class="matter-button-contained" type="submit">Enter</button> -->
    </form>
    <p class="or">or</p>
    <p><Link label="register" href="/register-new-user"></Link> now!!! it's free!!!</p>
  </section>
</div>