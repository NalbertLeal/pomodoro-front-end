<template>
  <section id="authentication-page">
    <!-- <app-figure src="https://doc.rust-lang.org/rust-logo1.46.0.png" alt="projet logo" /> -->

    <app-input label="Email" onChange={updateEmail} type="email" />
    <app-input label="Password" onChange={updatePassword} type="password" /> 
    <!-- classValue="margin-4rem"/> -->

    <app-button label="Login" :onClick="() => { $router. }"/>
    <app-button label="Create my account" :onClick="() => { page('/new-user') }"/>
    <app-button label="Forgot my password" :onClick="() => { page('/recover-password') }" />
  </section>
</template>

<script>
  import Button from '../basics/Button.svelte'
  import Figure from '../basics/Figure.svelte'
  import Input from '../basics/Input.svelte'

  export default {
    name: 'Authetication',
    components: {
      'app-button': Button,
      'app-figure': Figure,
      'app-input': Input
    },
    methods: {
      goToTimer() {
        this.$router.push('/timer')
      },
      goToCreateNewUser() {
        this.$router.push('/create-new-user')
      },
      goToRecoverUserPassword() {
        this.$router.push('/recover-user-password')
      }
    }
  }
</script>

<style scoped>
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