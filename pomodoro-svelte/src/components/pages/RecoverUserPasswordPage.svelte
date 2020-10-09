<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'

  let email

  function updateEmail(event) {
    email = event.srcElement.value
  }
</script>

<style>
  @media only screen and (max-width: 721px) {
    #recover-password {
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0rem;
      padding: 1rem 0rem 0rem 0rem;
    }

    .email-box {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-items: center;
    }
  }

  @media only screen and (min-width: 722px) {
    #recover-password {
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 1rem 0rem 0rem 0rem;
    }

    .email-box {
      width: 20rem;
      height: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-items: center;
    }
  }
</style>

<section id="recover-password">
  <div class="email-box">
    <Input label="Email" onChange={updateEmail} type="email" />
    <Button label="Send email" onClick={() => {}} />
  </div>
</section>