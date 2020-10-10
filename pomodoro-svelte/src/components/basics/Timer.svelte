<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'
  import Timer from '../basics/Timer.svelte'

  let initialTimer = null
  let currentTimer = null
  let pomodoroCurrentStage = 0
  let shortRestDiv = false
  let longRestDiv = false
  let workTimeDiv = true

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
        console.log('okok')
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
    const [minutes, seconds] = calculateTimerMinuterSeconds(currentTimer, initialTimer)

    return `${minutes} : ${seconds < 0 ? 0 : seconds}`
  }

  $: displayTime = parseTick(currentTimer, initialTimer)

  startTimer()
</script>

<style>
  #timer {
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
</style>

<div id="timer">
  <p>{displayTime}</p>

  <div class="pomodoro-stages">
    <div id="pomodoro-short-rest" class="pomodoro-stage" class:shortRestDiv={'pomodoro-stage-active'}>Short Rest</div>
    <div id="pomodoro-long-rest" class="pomodoro-stage" class:longRestDiv={'pomodoro-stage-active'} >Long Rest</div>
    <div id="pomodoro-work-time" class="pomodoro-stage" class:workTimeDiv={'pomodoro-stage-active'} >Work Time</div>
  </div>

  <div id="time-bar" />
</div>