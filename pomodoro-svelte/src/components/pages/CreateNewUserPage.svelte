<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'

  let email
  let password
  let repeatPassword

  function isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return true
    return false
  }

  function ifNotAuthenticatedGoToLogin() {
    if (!isAuthenticated()) page('/')
  }

  function updateEmail(event) {
    email = event.srcElement.value
  }

  function updatePassword(event) {
    password = event.srcElement.value
  }

  function updateRepeatPassword(event) {
    repeatPassword = event.srcElement.value
  }

  // ifNotAuthenticatedGoToLogin()
</script>

<style>
  @media only screen and (max-width: 721px) {
    #create-new-user-page {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0rem;
      padding: 1rem 0rem 0rem 0rem;
    }
  }

  @media only screen and (min-width: 722px) {
    #create-new-user-page {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 0rem;
    }
  }
</style>

<section id="create-new-user-page">
  <Input label="Email" onChange={updateEmail} type="email" />
  <Input label="Password" onChange={updatePassword} type="password" />
  <Input label="Repeat password" onChange={updateRepeatPassword} type="password" />

  <Button label="Create new user" />
</section>