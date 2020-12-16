<script>
  export let label
  export let onClick = (() => {})

  function linkClick(e) {
    e.preventDefault()
    onClick()
  }
</script>

<style>
</style>

<a
  href="#"
  on:click={linkClick}
>
  {label}
</a>