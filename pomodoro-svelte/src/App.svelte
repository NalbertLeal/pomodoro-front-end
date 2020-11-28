<script>
  import page from "page"

  import Login from "./presentation/pages/Login.svelte"
  import Pomodoro from "./presentation/pages/Pomodoro.svelte"
  import HomeWrapper from "./presentation/pages/HomeWrapper.svelte"
  import CreateNewUser from "./presentation/pages/CreateNewUser.svelte"

  let baseURL = '/'
  let currentPage

  page('/pomodoro', () => (currentPage = Pomodoro))
  page('/login', () => (currentPage = Login))
  page('/register-new-user', () => (currentPage = CreateNewUser))
  page(baseURL, () => (currentPage = HomeWrapper))

  page.start()
</script>

<svelte:component this={currentPage} />
