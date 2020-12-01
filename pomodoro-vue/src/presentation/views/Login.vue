<template>
  <div id="login-page">
    <Modal 
      v-if="getOpenModal"
      title="Invalid form data!"
      text="use a valid email and verify if the password is the same to both fields"
      :closeModal="closeModal"
    />
    <section id="login">
      <!-- <form action=""> -->
        <article>
          <Input label="Email" @value="(v) => email = v" />
          <Input label="Passwords" @value="(v) => password = v" />
        </article>
        <Button label="Enter" :onClick="login"></Button>
      <!-- </form> -->
      <p class="or">or</p>
      <p> <Link label="register" href="/register-new-user" /> now!!! it's free!!!</p>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import { State } from 'vuex-class';
  import Component from 'vue-class-component';

  import Button from '../components/Button.vue'
  import Input from '../components/Input.vue'
  import Link from '../components/Link.vue'
  import Modal from '../components/Modal.vue'

  import Email from '../../domain/entities/value_ojects/Email'
  import Password from '../../domain/entities/value_ojects/Password'
  import LoginUseCase  from '../../domain/use_cases/Login'

  @Component({
    components: {
      Button,
      Input,
      Link,
      Modal
    }
  })
  export default class Login extends Vue {
    email: string = ''
    password: string = ''
    openModal: boolean = false

    get getOpenModal() {
      return this.openModal
    }

    closeModal() {
      this.openModal = !this.openModal
    }

    async login() {
      const emailValidator = new Email(this.email)
      const passwordValidator = new Password(this.password)
      if (!emailValidator.isValid || !passwordValidator.isValid) {
        this.openModal = true
        return
      }

      const loginUseCase = new LoginUseCase()
      try {
        await loginUseCase.execute(this.email,this. password)
        this.$router.push('/pomodoro')
      } catch (e) {
        this.openModal = true
      }
    }
  }
</script>

<style scoped>
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