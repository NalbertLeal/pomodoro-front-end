<script>
  import page from "page"

  export let label = ''
  export let href = ''
</script>

<style>
  a {
    font-size: large;
    cursor: pointer;
  }
</style>

<a class="matter-link" on:click={() => page(href)}>{label}</a>