<script>
  console.log('okokok')
  import page from 'page'

  import Button from './../../core/components/Button.svelte'
  import Input from '../../core/components/Input.svelte'

  import User from './../../../domain/entities/User'
  import RegisterNewUser from './../../../domain/use_cases/RegisterNewUser.js'
  import InvalidUser from './../../../exceptions/InvalidUser.js'
  import UserAlreadyExists from './../../../exceptions/UserAlreadyExists.js'

  let name = ''
  let email = ''
  let password = ''
  let rpassword = ''
  let rememberMe = false
  let isModalOpen = false
  let modalMsg = ''

  function setName(v) {
    name = v
  }
  
  function setEmail(v) {
    email = v
  }
  
  function setPassword(v) {
    password = v
  }
  
  function setRpassword(v) {
    rpassword = v
  }

  function openModal(msg) {
    isModalOpen = true
    modalMsg = msg
  }
  
  function closeModal() {
    isModalOpen = false
    modalMsg = ''
  }

  function goToPomodoro() {
    page('/pomodoro')
  }

  function isAuthenticated() {
    // if (isLoged) goToPomodoro()
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')
    
    if (tokenLS || tokenSS) {
      goToPomodoro()
    }
  }

  async function registerNewUser() {
    try {
      if (password !== rpassword) {
        openModal('Different passwords')
        return
      }
  
      const user = new User(name, email, password)
      if (!user.isValid) {
        throw new InvalidUser()
      }
    
      const registerNewUser = new RegisterNewUser()
      await registerNewUser.execute(user, rememberMe)
      console.log(registerNewUser.execute)
      goToPomodoro()
    } catch(e) {
      if(e instanceof InvalidUser) {
        openModal('Invalid user, verify the fields formats.')
        console.error('invalid user')
      }
      if(e instanceof UserAlreadyExists) {
        openModal('User with this email already register.')
        console.error('user already exists')
      }
      console.error(e)
    }
  }

  isAuthenticated()
</script>

<style>
  .register-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>

<section class="register-page d-flex justify-content-center align-items-center">
  {#if isModalOpen}
    <div
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> { modalMsg } </p>
      <Button label="Close" onClick={closeModal}></Button>
    </div>
  {/if}
  <article class="container w-25 border">
    <h2>Register</h2>
    <Input inputType="text" label="Name" onClick={setName} />
    <Input inputType="email" label="Email" onClick={setEmail} />
    <Input inputType="password" label="Password" onClick={setPassword} />
    <Input inputType="password" label="Repeat password" onClick={setRpassword} />
    <div class="form-group form-check">
      <label class="form-check-label">
        <input on:change={(v) => (rememberMe = v.target.value)} class="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
    </div>
    <Button label="Register" onClick={registerNewUser} />
  </article>
</section>