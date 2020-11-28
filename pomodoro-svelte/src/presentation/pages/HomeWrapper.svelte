<script>
  import page from "page"

  if (localStorage.getItem('token')) {
    page('/pomodoro')
  } else {
    page('/login')
  }
</script>

<style>
  .matter-progress-circular {
    font-size: 24px;
  }
</style>

<progress class="matter-progress-circular"></progress>