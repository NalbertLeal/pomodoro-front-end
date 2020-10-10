<template>
  <section id="timer-page">
    <app-timer />

    <div class="tasks-indicator">
      <p class="total-tasks">Total tasks: {{toDoTasks.length}}</p>
      <p class="tasksdone-">Done tasks: {{doneTasks}}</p>
    </div>

    <app-input label="New Task text" :onChange="updateTaskText" type="text" />

    <app-button label="Create new task" :onClick="() => {}" />
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  import Button from '../components/Button.vue'
  // import Figure from '../basics/Figure.svelte'
  import Input from '../components/Input.vue'
  import Timer from '../components/Timer.vue'

  export default {
    name: 'Timer',
    components: {
      'app-button': Button,
      'app-input': Input,
      'app-timer': Timer
    },
    computed: {
      ...mapState([
        'toDoTasks',
        'doneTasks'
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