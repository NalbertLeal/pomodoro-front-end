<script>
  export let label
  export let onClick = (() => {})
</script>

<style>
</style>

<button type="button" className="btn btn-primary" on:click={() => onClick()}>
  { label }
</button>