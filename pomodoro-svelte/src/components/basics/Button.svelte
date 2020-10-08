<script>
  export let label
  export let onClick = () => {}
</script>

<style>
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


<button
  on:click={onClick}
>
  { label }
</button>