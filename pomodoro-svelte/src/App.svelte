<script>
  import page from "page"

  import AuthenticationPage from "./components/pages/AuthenticationPage.svelte"
  import TimerPage from "./components/pages/TimerPage.svelte"
  import CreateNewUserPage from "./components/pages/CreateNewUserPage.svelte"
  import RecoverPasswordPage from "./components/pages/RecoverUserPasswordPage.svelte"

  let baseURL = '/'
  let currentPage

  page('/timer', () => (currentPage = TimerPage))
  page('/newUser', () => (currentPage = CreateNewUserPage))
  page('/recoverPassword', () => (currentPage = RecoverPasswordPage))
  page(baseURL, () => (currentPage = AuthenticationPage))

  page.start()
</script>

<svelte:component this={currentPage} />
