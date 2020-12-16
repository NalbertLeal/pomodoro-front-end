<script>
  import page from "page"

  import LoginPage from "./presentation/auth/pages/LoginPage.svelte"
  import RegisterPage from "./presentation/auth/pages/RegisterPage.svelte"
  import PomodoroPage from "./presentation/pomodoro/pages/PomodoroPage.svelte"
  import NewTask from "./presentation/pomodoro/pages/NewTask.svelte"

  let baseURL = '/'
  let currentPage

  page(baseURL + 'register', () => (currentPage = RegisterPage))
  page(baseURL + 'pomodoro', () => (currentPage = PomodoroPage))
  page(baseURL + 'new-task', () => (currentPage = NewTask))
  page(baseURL, () => (currentPage = LoginPage))

  page.start()
</script>

<svelte:component this={currentPage} />