<template>
  <section id="authentication-page">
    <app-figure :src="logo" alt="projet logo" />

    <app-input label="Email" onChange={updateEmail} type="email" />
    <app-input label="Password" onChange={updatePassword} type="password" /> 
    <!-- classValue="margin-4rem"/> -->

    <app-button label="Login" :onClick="goToTimer"/>
    <app-button label="Create my account" :onClick="goToCreateNewUser"/>
    <app-button label="Forgot my password" :onClick="goToRecoverUserPassword" />
  </section>
</template>

<script>
  import logo from "@/assets/logo.png"
  import Button from '../components/Button.vue'
  // import Figure from '../basics/Figure.svelte'
  import Input from '../components/Input.vue'

  export default {
    name: 'Authetication',
    components: {
      'app-button': Button,
      'app-input': Input
    },
    data() {
      return {
        logo: logo
      }
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