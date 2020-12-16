<script>
  import page from 'page'
  import { onMount } from 'svelte'

  import Button from '../../core/components/Button.svelte'
  
  import Task from './../../../domain/entities/Task.js'
  import Logout from './../../../domain/use_cases/Logout.js'
  import CreateTask from './../../../domain/use_cases/CreateTask.js'
  import GetUserTasks from './../../../domain/use_cases/GetUserTasks.js'
  import DeleteTask from './../../../domain/use_cases/DeleteTask.js'
  import StartPomodoro from './../../../domain/use_cases/StartPomodoro.js'
  import ResetPomodoro from './../../../domain/use_cases/ResetPomodoro.js'
  import PausePomodoro from './../../../domain/use_cases/PausePomodoro.js'
  import InvalidUser from './../../../exceptions/InvalidUser.js'

  let timer = 1500000
  let pomodoroStage = 'word'
  let tasks = []

  function goToNewTask() {
    page('/new-task')
  }
  
  function goToLogin() {
    page('/')
  }

  function isAuthenticated() {
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')

    const token = tokenLS || tokenSS

    console.log(token)
    
    if (!token) {
      goToLogin()
    }
  }

  function parseMinutes() {
    const minutes = Math.floor((timer / 1000) / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }

  function parseSeconds() {
    const seconds = Math.floor((timer / 1000) % 60)
    return seconds < 10 ? `0${seconds}` : seconds
  }

  function startTimer() {
    const startPomodoro = new StartPomodoro()
    startPomodoro.execute((timer, stage) => {
      timer = timer,
      pomodoroStage = stage
    })
  }

  function resetTimer() {
    const resetPomodoro = new ResetPomodoro()
    resetPomodoro.execute()
  }

  async function logout() {
    try {
      const logout = new Logout()
      await logout.execute()
    } catch(e) {
      console.error(e)
    }
    goToLogin()
  }

  async function getTasks() {
    try {
      const getUserTasks = new GetUserTasks()
      tasks = await getUserTasks.execute()
    } catch(e) {
      console.error(e)
    }
  }

  async function deleteTask(taskId) {
    try {
      const deleteTask = new DeleteTask()
      await deleteTask.execute(taskId)
      console.log(tasks.length)
      tasks = tasks.filter(e => {
        if (e.id != taskId) {
          return e
        }
      })
    } catch(e) {
      console.error(e)
    }
  }
  
  onMount(async () => {
    isAuthenticated()
    await getTasks()
  })
</script>

<style>
  .pomodoro-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>

<section class="pomodoro-page d-flex flex-column justify-content-start align-items-center">
  <article class="timer w-100 p-3 mb-5 border d-flex justify-content-end">
    <Button label="Logout" onClick={logout} />
  </article>
  <article class="timer w-50 p-3 mb-3 border d-flex justify-content-center">
    <h3> { parseMinutes() } minutes { parseSeconds() } seconds </h3>
  </article>
  <article class="pomodoro-stage w-50 p-3 mb-3 border d-flex justify-content-center">
    Now its time to { pomodoroStage }
  </article>
  <article class="pomodoro-controls w-50 p-3 mb-3 border d-flex justify-content-around">
    <Button label="Start" onClick={startTimer} />
    <Button label="Reset" onClick={resetTimer} />
  </article>
  <article class="tasks w-50 p-3 border d-flex flex-column justify-content-around align-items-center">
    <Button label="New Task" onClick={goToNewTask} />
    {#each tasks as t (t.id)}
      <article class="tasks-list w-100 mt-3 border p-2">
        <span class="w-25"> <Button label="X" onClick={() => deleteTask(t.id)} /> </span>
        <span class="w-75">{t.description}</span>
      </article>
    {/each}
  </article>
</section>