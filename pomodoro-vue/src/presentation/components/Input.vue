<template>
  <label id="normal" class="matter-textfield-standard">
    <input placeholder=" " v-model="value"/>
    <span>{{label}}</span>
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  const Base = Vue.extend({
    data() {
      return {
        value: ''
      }
    },
    props: {
      label: String
    },
    watch: {
      value() {
        this.$emit('value', this.value)
      }
    }
  })

  @Component
  export default class Button extends Base {
    
  }
</script>

<style scoped>
</style>