<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'

  let initialTimer = null
  let currentTimer = null
  let toDoTasks = []
  let doneTasks = 0
  let pomodoroCurrentStage = 0
  let shortRestDiv = false
  let longRestDiv = false
  let workTimeDiv = true

  function calculateTimerMinuterSeconds() {
    const timePassed = currentTimer - initialTimer

    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    return [minutes, seconds]
  }

  function definePomodoroStage() {
    const [minutes] = calculateTimerMinuterSeconds()

    if (minutes === 5 && pomodoroCurrentStage % 2 === 1) {
        pomodoroCurrentStage: pomodoroCurrentStage + 1,
        shortRestDiv = '',
        workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 15
      && pomodoroCurrentStage === 7) {
        pomodoroCurrentStage = 0,
        shortRestDiv = '',
        workTimeDiv = 'pomodoro-stage-active'
    } else if (minutes === 25
      && pomodoroCurrentStage === 6) {
        pomodoroCurrentStage = 0,
        longRestDiv = 'pomodoro-stage-active',
        workTimeDiv = ''
    } else if (minutes === 25) {
        pomodoroCurrentStage = pomodoroCurrentStage + 1,
        shortRestDiv = 'pomodoro-stage-active',
        workTimeDiv = ''
    }
  }

  function startTimer() {
    initialTimer = new Date()

    timerID = setInterval(
      () => {
        tick()
        definePomodoroStage()
      },
      1000
    );
  }

  function stopTimer() {
    clearInterval(timerID)
  }

  function tick() {
    currentTimer = new Date()
  }

  function parseTick() {
    const [minutes, seconds] = calculateTimerMinuterSeconds()

    return `${minutes} : ${seconds < 0 ? 0 : seconds}`
  }

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
  start()
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

  .pomodoro-stages {
    width: 100vw;
    height: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .pomodoro-stages .pomodoro-stage {
    width: 7rem;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightpink;
    font-weight: bold;
  }

  .pomodoro-stages .pomodoro-stage-active {
    background-color: tomato !important;
    color: white;
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
  <p>{parseTick()}</p>

  <div className="pomodoro-stages">
    <div id="pomodoro-short-rest" class="pomodoro-stage" class:shortRestDiv={'pomodoro-stage-active'}>Short Rest</div>
    <div id="pomodoro-long-rest" class="pomodoro-stage" class:longRestDiv={'pomodoro-stage-active'} >Long Rest</div>
    <div id="pomodoro-work-time" class="pomodoro-stage" class:workTimeDiv={'pomodoro-stage-active'} >Work Time</div>
  </div>

  <div id="time-bar">

  </div>

  <div className="tasks-indicator">
    <p className="total-tasks">Total tasks: {toDoTasks.length}</p>
    <p className="tasksdone-">Done tasks: {doneTasks}</p>
  </div>

  <Input label="New Task text" onChange={updateTaskText} type="text" />

  <Button label="Create new task" onClick={() => {}} />
</section>