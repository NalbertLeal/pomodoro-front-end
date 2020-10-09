<template>
  <button
    @click="onClick()"
  >
    {{label}}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      label: {
        type: String,
        default: ''
      },
      onClick: {
        type: Function,
        default: () => { return () =>{} }
      }
    }
  }
</script>

<style scoped>
  button {
    width: 12rem;
    height: 3rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    color: #000;
    background-color: transparent;
    box-shadow: 0rem 0rem .3rem .1rem grey;
  }
</style>