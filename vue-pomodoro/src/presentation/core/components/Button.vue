<template>
  <button type="button" className="btn btn-primary" @click="clickMethod($event)">
    {{ label }}
  </button>
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