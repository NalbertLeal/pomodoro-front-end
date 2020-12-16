<template>
  <div class="form-group mb-3">
    <label :for="label">{{ label }}:</label>
    <input v-model="value" :type="inputType" class="form-control" :id="label" :placeholder="label" :name="label" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    inputType: {
      type: String,
      default: () => ''
    },
    onClick: {
      type: Function,
      default: () => (() => {})
    }
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.onClick(this.value)
    }
  }
}
</script>

<style>
/* EMPTY */
</style>