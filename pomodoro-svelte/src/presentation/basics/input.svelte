<script>
  export let label
  export let getValue = () => value

  let value = undefined
</script>

<style>
  input {
    margin-bottom: 1rem;
  }
</style>

<label id="normal" class="matter-textfield-standard">
  <input placeholder=" " on:change={value}/>
  <span>{label}</span>
</label>