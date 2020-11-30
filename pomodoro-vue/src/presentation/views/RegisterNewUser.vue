<template>
  <div id="register-use-page">
    <section id="register">
      <form action="">
        <article>
          <Input label="Email" @value="formEmailValue"/>
          <Input label="Password" @value="formPasswordValue"/>
          <Input label="Repeat password" @value="formRepeatPasswordValue"/>
        </article>
        <label id="accept-terms-checkbox" class="matter-checkbox">
          <input type="checkbox">
          <span>I accept all the <Link href="terms.txt" label="terms" /> </span>
        </label>
        <Button label="Register" :onClick="register"></Button>
      </form>
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

  @Component({
    components: {
      Button,
      Link,
      Input
    }
  })
  export default class Login extends Vue {
    email: String = ''
    password: String = ''
    repeatedPassword: String = ''

    formEmailValue(email: any) {
      this.email = email
    }

    formPasswordValue(password: any) {
      this.password = password
    }

    formRepeatPasswordValue(repeatedPassword: any) {
      this.repeatedPassword = repeatedPassword
    }

    register() {
      this.$router.push('/pomodoro')
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