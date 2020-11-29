<template>
  <button id="login-btn" class="matter-button-contained" v-on:click="onClick">{{label}}</button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  const Props = Vue.extend({
    props: {
      label: String,
      onClick: Function
    }
  })

  @Component
  export default class Button extends Props {
    
  }
</script>

<style scoped>
</style>