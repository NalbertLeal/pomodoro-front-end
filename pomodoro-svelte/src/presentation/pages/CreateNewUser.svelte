<script>
  import page from "page"

  import User from '../../domain/entities/User'
  import RegisterNewUser from '../../domain/use_cases/RegisterNewUser'
  import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

  import Button from '../basics/button.svelte'
  import Input from '../basics/input.svelte'
  import Modal from '../basics/modal.svelte'

  let name = ''
  let email = ''
  let password = ''
  let rpassword = ''

  let openModal1 = false
  let openModal2 = false

  async function register() {
    if (password !== rpassword) {
      // DIFERENT PASSWORDS
      openModal1 = true
      return
    }
    
    const user = new User(name, email, password)
    if (!user.isValid) {
      // INVALID USER
      openModal1 = true
      return
    }
    
    let registerNewUser = new RegisterNewUser()

    try {
      await registerNewUser.execute(user)
      page('/pomodoro')
    } catch (e) {
      if (e instanceof UserAlreadyExists) {
        openModal1 = true
      } else {
        openModal2 = true
      }
    }
  }
</script>

<style>
  #register-new-user-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  button {
    margin: 0rem 0rem 1rem 0rem;
  }

  input {
    margin-bottom: 1rem;
  }

  p {
    margin: 0rem 0rem 1rem 0rem;
  }

  #register {
    width: 18rem;
    height: 20rem;
    box-shadow: 0rem 0rem 0.7rem #aac;
  }

  #register,
  #register form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #register article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
  }

  #accept-terms-checkbox {
    margin-bottom: 1rem;
  }
</style>

{#if openModal1}
  <Modal title={'Invalid form data!'} text={'use a valid email and verify if the password is the same to both fields'} closeModal={() => openModal1 = false}></Modal>
{/if}

{#if openModal2}
  <Modal title={'Sorry!'} text={'an user with this email already exists'} closeModal={() => openModal2 = false}></Modal>
{/if}

<div id="register-new-user-page">
  <section id="register">
    <form action="" method="post">
      <article>
        <Input label="Name" on:change={(e) => name = e.target.value}></Input>
        <Input label="Email" on:change={(e) => email = e.target.value}></Input>
        <Input label="Password" on:change={(e) => password = e.target.value}></Input>
        <Input label="Repeat password" on:change={(e) => rpassword = e.target.value}></Input>
      <label id="accept-terms-checkbox" class="matter-checkbox">
        <input type="checkbox">
        <span>I accept all the <a class="matter-link" href="terms.txt" style="font-size: large;">terms</a></span>
      </label>
      <Button label="Register" onClick={register}></Button>
    </form>
  </section>
</div>