<script>
  export let label
  export let onClick = () => {}
</script>

<style>
  button {
    margin: 0rem 0rem 1rem 0rem;
  }
</style>

<button
  class="matter-button-contained"
  on:click={onClick}
  type="button"
>
  { label }
</button>