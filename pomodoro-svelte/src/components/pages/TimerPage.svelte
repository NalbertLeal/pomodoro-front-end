<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'
  import Timer from '../basics/Timer.svelte'

  let toDoTasks = []
  let doneTasks = 0

  function isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return true
    return false
  }

  function ifNotAuthenticatedGoToLogin() {
    if (!isAuthenticated()) page('/')
  }
  
  function updateTaskText(event) {
    const newTaskText = event.srcElement.value
    toDoTasks.push(newTaskText)
  }

  // ifNotAuthenticatedGoToLogin()
</script>

<style>
  #timer-page {
    min-height: 100vh;
    min-width: 100vw;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tasks-indicator {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 5vw;
    box-sizing: border-box;
  }
</style>

<section id="timer-page">
  <Timer />

  <div class="tasks-indicator">
    <p class="total-tasks">Total tasks: {toDoTasks.length}</p>
    <p class="tasksdone-">Done tasks: {doneTasks}</p>
  </div>

  <Input label="New Task text" onChange={updateTaskText} type="text" />

  <Button label="Create new task" onClick={() => {}} />
</section>