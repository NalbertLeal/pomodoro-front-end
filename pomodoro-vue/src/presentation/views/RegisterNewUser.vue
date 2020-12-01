/* eslint-disable */
<template>
  <div id="register-use-page">
    <Modal 
      v-if="getIsModal1Open"
      title="Invalid form data!"
      text="use a valid email and verify if the password is the same to both fields"
      :closeModal="openModal1"
    />
    <Modal 
      v-if="getIsModal2Open"
      title="Sorry!"
      text="an user with this email already exists"
      :closeModal="openModal2"
    />
    <section id="register">
      <!-- <form action=""> -->
        <article>
          <Input label="Name" @value="formNameValue"/>
          <Input label="Email" @value="formEmailValue"/>
          <Input label="Password" @value="formPasswordValue"/>
          <Input label="Repeat password" @value="formRepeatPasswordValue"/>
        </article>
        <label id="accept-terms-checkbox" class="matter-checkbox">
          <input type="checkbox">
          <span>I accept all the <Link href="terms.txt" label="terms" /> </span>
        </label>
        <Button label="Register" :onClick="register"></Button>
      <!-- </form> -->
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import { State } from 'vuex-class';
  import Component from 'vue-class-component';

  import Button from '../components/Button.vue'
  import Link from '../components/Link.vue'
  import Input from '../components/Input.vue'
  import Modal from '../components/Modal.vue'

  import User from '../../domain/entities/User'
  import RegisterNewUser from '../../domain/use_cases/RegisterNewUser'
  import UserAlreadyExists from '../../exceptions/UserAlreadyExists'

  @Component({
    components: {
      Button,
      Link,
      Input,
      Modal
    }
  })
  export default class Login extends Vue {
    name: string = ''
    email: string = ''
    password: string = ''
    repeatedPassword: string = ''
    isModal1Open: boolean = false
    isModal2Open: boolean = false

    get getIsModal1Open() {
      return this.isModal1Open
    }

    get getIsModal2Open() {
      return this.isModal2Open
    }

    formNameValue(name: string) {
      this.name = name
    }

    formEmailValue(email: string) {
      this.email = email
    }

    formPasswordValue(password: string) {
      this.password = password
    }

    formRepeatPasswordValue(repeatedPassword: string) {
      this.repeatedPassword = repeatedPassword
    }

    openModal1() {
      this.isModal1Open = !this.isModal1Open
    }
    
    openModal2() {
      this.isModal2Open = !this.isModal2Open
    }

    async register() {
      if (this.password !== this.repeatedPassword) {
        this.openModal1()
        return
      }

      const user = new User(this.name, this.email, this.password)
      if (!user.isValid) {
        this.openModal1()
        return
      }

      let registerNewUser = new RegisterNewUser()
      try {
        await registerNewUser.execute(user)
        this.$router.push('/pomodoro')
      } catch (e) {
        if (e instanceof UserAlreadyExists) {
          this.openModal1()
        } else {
          this.openModal2()
        }
      }
    }
  }
</script>

<style scoped>
  #register-use-page {
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