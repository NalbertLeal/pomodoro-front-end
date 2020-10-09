<template>
  <section id="timer-page">
    <p>{parseTick()}</p>

    <div className="pomodoro-stages">
      <div id="pomodoro-short-rest" class="pomodoro-stage" :class="{'pomodoro-stage-active': shortRestDiv}">Short Rest</div>
      <div id="pomodoro-long-rest" class="pomodoro-stage" :class="{'pomodoro-stage-active': longRestDiv}" >Long Rest</div>
      <div id="pomodoro-work-time" class="pomodoro-stage" :class="{'pomodoro-stage-active': workTimeDiv}" >Work Time</div>
    </div>

    <div id="time-bar">

    </div>

    <div className="tasks-indicator">
      <p className="total-tasks">Total tasks: {toDoTasks.length}</p>
      <p className="tasksdone-">Done tasks: {doneTasks}</p>
    </div>

    <Input label="New Task text" :onChange="updateTaskText" type="text" />

    <Button label="Create new task" :onClick="() => {}" />
  </section>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import Button from '../basics/Button.svelte'
  import Figure from '../basics/Figure.svelte'
  import Input from '../basics/Input.svelte'

  export default {
    name: 'Timer',
    components: {
      'app-button': Button,
      'app-input': Input
    },
    computed: {
      ...mapGetters([
        'parseTick'
      ])
    },
    methods: {
      ...mapMutations([
        'startTimer',
        'stopTimer',
        'tick'
      ])
    }
  }
</script>

<style scoped>
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