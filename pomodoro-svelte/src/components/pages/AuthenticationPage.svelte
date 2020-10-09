<script>
  import page from 'page'

  import { onDestroy } from 'svelte';

  import authStore from '../../stores/auth.js'

  import Button from '../basics/Button.svelte'
  import Figure from '../basics/Figure.svelte'
  import Input from '../basics/Input.svelte'

  let email = ''
  let password = ''
  let isAuthenticated = null

  function updateEmail(newEmail) {
    email = newEmail.srcElement.value
  }

  function updatePassword(newPassword) {
    password = newPassword.srcElement.value
  }

  // let isAuthenticatedSubsc = authStore.subscribe(store => {
	// 	isAuthenticated = store.user !== null
  // })
  
  // $: console.log(isAuthenticatedSubsc)

  // onDestroy(isAuthenticatedSubsc)
</script>

<style>
  @media only screen and (max-width: 721px) {
    #authentication-page {
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 1rem 0rem 0rem 0rem;
    }
  }

  @media only screen and (min-width: 722px) {
    #authentication-page {
      min-width: 100vw;
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

<section id="authentication-page">
  <!-- <Figure src="https://doc.rust-lang.org/rust-logo1.46.0.png" alt="projet logo" /> -->

  <Input label="Email" onChange={updateEmail} type="email" />
  <Input label="Password" onChange={updatePassword} type="password" /> 
  <!-- classValue="margin-4rem"/> -->

  <Button label="Login" onClick={() => { page('/timer') }}/>
  <Button label="Create my account" onClick={() => { page('/new-user') }}/>
  <Button label="Forgot my password" onClick={() => { page('/recover-password') }} />
</section>