<template>
  <section id="create-new-user-page">
    <app-input label="Email" :onChange="updateEmail" type="email" />
    <app-input label="Password" :onChange="updatePassword" type="password" />
    <app-input label="Repeat password" :onChange="updateRepeatPassword" type="password" />

    <app-button label="Create new user" />
  </section>
</template>

<script>
  import Button from '../components/Button.vue'
  // import Figure from '../basics/Figure.svelte'
  import Input from '../components/Input.vue'

  export default {
    name: 'CreateNewUser',
    components: {
      'app-button': Button,
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
    #create-new-user-page {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0rem;
      padding: 1rem 0rem 0rem 0rem;
    }
  }

  @media only screen and (min-width: 722px) {
    #create-new-user-page {
      width: 100vw;
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