<template>
  <label>
    <input
      :type="type"
      :placeholder="label"
      :onchange="onClick()"
    />
  </label>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'text'
      },
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

<style>
  label {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  label input {
    max-width: 80vh;
    width: 20rem;
    height: 2.5rem;
    padding: 0rem 0rem 0rem .5rem;
    border: none;
    outline: none;
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 0rem 0rem .3rem .1rem grey;
    font-weight: bold;
  }

  /* .margin-4rem {
    margin-bottom: 4rem;
  } */
</style>