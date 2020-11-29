<template>
  <!-- <button id="login-btn" class="matter-button-contained">{{label}}</button> -->
  <a class="matter-link" v-on:click="() => $router.push(href)">{{label}}</a>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  const Props = Vue.extend({
    props: {
      label: String,
      href: String
    }
  })

  @Component
  export default class Link extends Props {
    
  }
</script>

<style scoped>
  a {
    font-size: large;
  }
</style>