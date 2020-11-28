<script>
  import page from "page"

  import Button from '../basics/button.svelte'
  import Input from '../basics/input.svelte'
  import Link from '../basics/link.svelte'

  let getEmailValue = () => {}
  let getPasswordValue = () => {}
  let getRepeatedPasswordValue = () => {}

  let register = () => {
    page('/pomodoro')
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

<div id="register-new-user-page">
  <section id="register">
    <form action="" method="post">
      <article>
        <Input label="Email" getValue={getEmailValue}></Input>
        <Input label="Password" getValue={getPasswordValue}></Input>
        <Input label="Repeat password" getValue={getRepeatedPasswordValue}></Input>
      <label id="accept-terms-checkbox" class="matter-checkbox">
        <input type="checkbox">
        <span>I accept all the <a class="matter-link" href="terms.txt" style="font-size: large;">terms</a></span>
      </label>
      <Button label="Register" onClick={register}></Button>
    </form>
  </section>
</div>