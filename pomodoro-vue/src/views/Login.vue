<template>
  <div id="login-page">
    <section id="login">
      <form action="">
        <article>
          <label id="normal" class="matter-textfield-standard">
            <input placeholder=" "/>
            <span>Email</span>
          </label>
          <label id="normal" class="matter-textfield-standard">
            <input placeholder=" "/>
            <span>Password</span>
          </label>
        </article>
        <Button label="Enter" :onClick="login"></Button>
      </form>
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
  import Link from '../components/Link.vue'

  @Component({
    components: {
      Button,
      Link
    }
  })
  export default class Login extends Vue {
    login() {
      this.$router.push('/pomodoro')
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