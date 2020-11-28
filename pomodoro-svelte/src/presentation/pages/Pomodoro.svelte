<script>
  import { onDestroy } from 'svelte';

  import page from "page"

  import Button from '../basics/button.svelte'
  import Input from '../basics/input.svelte'
  import Link from '../basics/link.svelte'

  let initialTimer = null
  let currentTimer = null
  let pomodoroCurrentStage = 0
  let shortRestDiv = false
  let longRestDiv = false
  let workTimeDiv = true

  function logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
    }
    page('/login')
  }

  function calculateTimerMinuterSeconds(currentTimer, initialTimer) {
    const timePassed = currentTimer - initialTimer
    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0
    return [minutes, seconds]
  }
  
  function definePomodoroStage() {
    const [minutes] = calculateTimerMinuterSeconds(currentTimer, initialTimer)
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
    currentTimer = setInterval(
      () => {
        tick()
        definePomodoroStage()
      },
      1000
    );
  }
  
  function stopTimer() {
    clearInterval(currentTimer)
  }
  
  function tick() {
    currentTimer = new Date()
  }
  
  function parseTick(currentTimer, initialTimer) {
    // console.log(shortRestDiv)
    // console.log(longRestDiv)
    // console.log(workTimeDiv)
    const [minutes, seconds] = calculateTimerMinuterSeconds(currentTimer, initialTimer)
    // return `${minutes} : ${seconds < 0 ? 0 : seconds}`
    return [
      minutes,
      seconds < 0 ? 0 : seconds
    ]
  }

  $: [minutes, seconds] = parseTick(currentTimer, initialTimer)
  
  startTimer()
</script>

<style>
  #pomodoro-page {
    margin: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  button {
    margin: 0rem 0rem 1rem 0rem;
  }

  p {
    margin: 0rem 0rem 1rem 0rem;
  }

  header {
    width: calc(100vw - 1rem);
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 1rem 0rem 0rem;
    background-color: rgb(33,150,243);
  }

  header #logout-btn,
  header #logout-btn::before,
  header #logout-btn::after {
    color: rgb(33,150,243) !important;
    background-color: #fff !important;
  }

  #pomodoro {
    margin: 2rem 0rem 5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #pomodoro #time {
    height: 6rem;
    margin: 1rem 0rem 1rem 0rem;
    font-size: 4rem;
  }

  #pomodoro #controls {
    width: 30rem;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #pomodoro #pomodoro-stages {
    width: 30rem;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #pomodoro #pomodoro-stages .pomodoro-stage {
    /* background-color: rgb(33,150,243); */
  }

  #pomodoro #pomodoro-stages #pomodoro-stage {
    font-size: 2rem;
  }

  #tasks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #tasks .task {
    width: 30rem;
    margin: 0rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pomodoro-stage-active,
  .pomodoro-stage-active::before,
  .pomodoro-stage-active::after {
    border-color: red !important;
    color: red !important;
  }
</style>

<div id="pomodoro-page">
  <header>
    <Button label="Logout" onClick={logout}></Button>
  </header>
  <section id="pomodoro">
    <article id="time">
      {minutes < 10 ? `0${minutes}` : minutes} min {seconds < 10 ? `0${seconds}` : seconds} sec
    </article>
    <article id="controls">
      <Button label="Stop" onClick={stopTimer}></Button>
      <Button label="Play" onClick={startTimer}></Button>
    </article>
    <article id="pomodoro-stages">
      <article class={shortRestDiv ? "pomodoro-stage matter-button-outlined pomodoro-stage-active" : "pomodoro-stage matter-button-outlined"}>Work time</article>
      <article class={longRestDiv ? "pomodoro-stage matter-button-outlined pomodoro-stage-active" : "pomodoro-stage matter-button-outlined"}>Short Break</article>
      <article class={workTimeDiv ? "pomodoro-stage matter-button-outlined pomodoro-stage-active" : "pomodoro-stage matter-button-outlined"}>Long Break</article>
    </article>
  </section>
  <section id="tasks">
    <article class="task">
      <button id="delete-task-1" class="matter-button-contained">X</button>
      <p>Title 1</p>
      <p>Description of the task</p>
    </article>
    <article class="task">
      <button id="delete-task-2" class="matter-button-contained">X</button>
      <p>Title 2</p>
      <p>Description of the task</p>
    </article>
    <article class="task">
      <button id="delete-task-3" class="matter-button-contained">X</button>
      <p>Title 3</p>
      <p>Description of the task</p>
    </article>
  </section>
</div>