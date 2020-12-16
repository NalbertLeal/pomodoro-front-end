<template>
  <section class="register-page d-flex justify-content-center align-items-center">
    <div 
      v-if="getIsModalOpen" 
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> {{ getModalMsg }} </p>
      <Button label="Close" :onClick="closeModal"></Button>
    </div>
    <article class="container w-25 border">
      <h2>Register</h2>
      <Input inputType="text" label="Name" :onClick="setName" />
      <Input inputType="email" label="Email" :onClick="setEmail" />
      <Input inputType="password" label="Password" :onClick="setPassword" />
      <Input inputType="password" label="Repeat password" :onClick="setRpassword" />
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember" v-model="rememberMe" /> Remember me
        </label>
      </div>
      <Button label="Register" :onClick="registerNewUser"></Button>
    </article>
  </section>
</template>

<script>
import Button from '@/presentation/core/components/Button'
import Input from '@/presentation/core/components/Input'

import User from '@/domain/entities/User'
import RegisterNewUser from '@/domain/use_cases/RegisterNewUser.js'
import InvalidUser from '@/exceptions/InvalidUser'
import UserAlreadyExists from '@/exceptions/UserAlreadyExists'

export default {
  components: {
    Button,
    Input
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      rpassword: '',
      rememberMe: false,
      isModalOpen: false,
      modalMsg: '',
      isLoged: undefined
    }
  },
  mounted() {
    this.isAuthenticated()
  },
  computed: {
    getIsModalOpen() {
      return this.isModalOpen
    },
    getModalMsg() {
      return this.modalMsg
    }
  },
  methods: {
    setName(newName) {
      this.name = newName
    },
    setEmail(newEmail) {
      this.email = newEmail
    },
    setPassword(newPassword) {
      this.password = newPassword
    },
    setRpassword(newRpassword) {
      this.rpassword = newRpassword
    },
    openModal(msg) {
      this.isModalOpen = true
      this.modalMsg = msg
      this.$forceUpdate()
    },
    closeModal() {
      this.isModalOpen = false
      this.modalMsg = ''
    },
    goToPomodoro() {
      this.$router.push('/pomodoro')
    },
    isAuthenticated() {
      if (this.isLoged) this.goToPomodoro()
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')
      
      if (tokenLS || tokenSS) {
        this.goToPomodoro()
      }
    },
    async registerNewUser() {
      try {
        if (this.password !== this.rpassword) {
          this.openModal('Different passwords')
          return
        }
    
        const user = new User(this.name, this.email, this.password)
        if (!user.isValid) {
          throw new InvalidUser()
        }
        console.log(user)
      
        const registerNewUser = new RegisterNewUser()
        await registerNewUser.execute(user, this.rememberMe)
        console.log(registerNewUser.execute)
        this.goToPomodoro()
      } catch(e) {
        if(e instanceof InvalidUser) {
          this.openModal('Invalid user, verify the fields formats.')
          console.error('invalid user')
        }
        if(e instanceof UserAlreadyExists) {
          this.openModal('User with this email already register.')
          console.error('user already exists')
        }
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
  .register-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>