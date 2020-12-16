<template>
  <section class="login-page d-flex justify-content-center align-items-center">
    <div
      v-if="openModal.open" 
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> {{ this.openModal.msg }} </p>
      <Button label="Close" :click="closeModal()"></Button>
    </div>
    <article class="container w-25 p-3 border">
      <h2 class="mb-3">Login</h2>
      <Input inputType="email" label="Email" :onClick="setEmail" />
      <Input inputType="password" label="Password" :onClick="setPassword" />
      <div class="form-group form-check mb-3">
        <label class="form-check-label" for="remember">
          <input v-model="rememberMe" class="form-check-input" id="remember" type="checkbox" name="remember" /> Remember me
        </label>
      </div>
      <p> Don't have an account? <Link label="Register" :onClick="goToRegister" /> now! </p>
      <Button label="Login" :onClick="makeLogin"></Button>
    </article>
  </section>
</template>

<script>
import Link from '@/presentation/core/components/Link'
import Button from '@/presentation/core/components/Button'
import Input from '@/presentation/core/components/Input'

import Login from '@/domain/use_cases/Login.js'
import InvalidUser from '@/exceptions/InvalidUser.js'
import UserNotFound from '@/exceptions/UserNotFound.js'

export default {
  components: {
    Button,
    Input,
    Link
  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      openModal: {open: false, msg: ''}
    }
  },
  mounted() {
    this.isAuthenticated()
  },
  methods: {
    setEmail(newEmail) {
      this.email = newEmail
    },
    setPassword(newPassword) {
      this.password = newPassword
    },
    goToRegister(event) {
      this.$router.push('/register')
    },
    goToPomodoro() {
      this.$router.push('/pomodoro')
    },
    isAuthenticated() {
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')
      
      if (tokenLS || tokenSS) {
        this.goToPomodoro()
      }
    },
    closeModal() {
      this.openModal = {open: false, msg: ''}
    },
    async makeLogin() {
      try {
        const login = new Login()
        await login.execute(this.email, this.password, this.rememberMe)
        this.goToPomodoro()
      } catch(e) {
        if (e instanceof UserNotFound){
          this.openModal = {open: true, msg: 'User not found.'}
          console.error()
        } else if(e instanceof InvalidUser) {
          this.openModal = {open: true, msg: 'Invalid user, verify your credentials.'}
          console.error()
        }
      }
    }
  },
}
</script>

<style scoped>
  .login-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>