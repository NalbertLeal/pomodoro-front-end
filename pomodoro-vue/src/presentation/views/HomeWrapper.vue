<template>
  <div></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import { State } from 'vuex-class';
  import Component from 'vue-class-component'

  @Component
  export default class HomeWrapper extends Vue {
    // @State('timer') state;

    mounted() {
      if (localStorage.getItem('token')) {
        this.$router.push('/pomodoro')
      } else {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
</style>