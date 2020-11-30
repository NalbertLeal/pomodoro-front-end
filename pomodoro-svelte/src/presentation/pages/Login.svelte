<script>
  import page from "page"

  import Button from '../basics/button.svelte'
  import Input from '../basics/input.svelte'
  import Link from '../basics/link.svelte'
  import Modal from '../basics/modal.svelte'

  import Email from '../../domain/entities/value_ojects/Email'
  import Password from '../../domain/entities/value_ojects/Password'
  import Login from '../../domain/use_cases/Login'

  let email = ''
  let password = ''
  let openModal = false

  async function login() {
    const emailValidator = new Email(email)
    const passwordValidator = new Password(password)
    if (!emailValidator.isValid || !passwordValidator.isValid) {
      openModal = true
      return
    }

    const login = new Login()
    try {
      await login.execute(email, password)
      page('/pomodoro')
    } catch (e) {
      openModal = true
    }
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

{#if openModal}
  <Modal title={'Invalid form data!'} text={'use a valid email and verify if the password is the same to both fields'} closeModal={() => openModal = false}></Modal>
{/if}

<div id="login-page">
  <section id="login">
    <form action="" method="get">
      <article>
        <Input label="Email" on:change={(e) => email = e.target.value}></Input>
        <Input label="Password" on:change={(e) => password = e.target.value}></Input>
      </article>
      <Button label="Enter" onClick={login}></Button>
      <!-- <button id="login-btn" class="matter-button-contained" type="submit">Enter</button> -->
    </form>
    <p class="or">or</p>
    <p><Link label="register" href="/register-new-user"></Link> now!!! it's free!!!</p>
  </section>
</div>