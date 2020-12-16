<script>
  import page from 'page'

  import Button from '../../core/components/Button.svelte'
  import Link from '../../core/components/Link.svelte'
  import Input from '../../core/components/Input.svelte'

  import Login from './../../../domain/use_cases/Login.js'
  import InvalidUser from './../../../exceptions/InvalidUser.js'
  import UserNotFound from './../../../exceptions/UserNotFound.js'

  let email = ''
  let password = ''
  let rememberMe = false
  let isModalOpen = false
  let modalMsg = ''

  function setEmail(value) {
    email = value
  }
  
  function setPassword(value) {
    password = value
  }

  function goToRegister() {
    page('/register')
  }

  function goToPomodoro() {
    page('/pomodoro')
  }

  function isAuthenticated() {
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')
    
    if (tokenLS || tokenSS) {
      goToPomodoro()
    }
  }

  function openModal(msg) {
    isModalOpen = true
    modalMsg = msg
  }

  function closeModal() {
    isModalOpen = false
    modalMsg = ''
  }
  
  async function makeLogin() {
    try {
      const login = new Login()
      console.log(email)
      console.log(password)
      await login.execute(email, password, rememberMe)
      goToPomodoro()
    } catch(e) {
      if (e instanceof UserNotFound){
        openModal('User not found.')
        console.error()
      } else if(e instanceof InvalidUser) {
        openModal('Invalid user, verify your credentials.')
        console.error()
      }
    }
  }

  isAuthenticated()
</script>

<style>
  .login-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>

<section class="login-page d-flex justify-content-center align-items-center">
  {#if isModalOpen}
    <div
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> { modalMsg } </p>
      <Button label="Close" onClick={() => closeModal()}></Button>
    </div>
  {/if}
  <article class="container w-25 p-3 border">
    <h2 class="mb-3">Login</h2>
    <Input inputType="email" label="Email" onClick={setEmail} />
    <Input inputType="password" label="Password" onClick={setPassword} />
    <div class="form-group form-check mb-3">
      <label class="form-check-label" for="remember">
        <input on:change={(v) => (rememberMe = v.target.value)} class="form-check-input" id="remember" type="checkbox" name="remember" /> Remember me
      </label>
    </div>
    <p> Don't have an account? <Link label="Register" onClick={goToRegister} /> now! </p>
    <Button label="Login" onClick={makeLogin} />
  </article>
</section>