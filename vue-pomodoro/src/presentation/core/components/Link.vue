<template>
  <a href="#" @click="clickMethod($event)">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    onClick: {
      type: Function,
      default: () => (() => {})
    }
  },
  methods: {
    clickMethod(event) {
      event.preventDefault()
      this.onClick()
    }
  }
}
</script>

<style>
/* EMPTY */
</style>