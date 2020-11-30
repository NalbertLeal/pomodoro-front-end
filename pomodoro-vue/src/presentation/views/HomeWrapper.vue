<template>
  <section id="timer-page">
    <app-timer />

    <div class="tasks-indicator">
      <p class="total-tasks">Total tasks: {{state.toDoTasks.length}}</p>
      <p class="tasksdone-">Done tasks: {{state.doneTasks}}</p>
    </div>

    <app-input label="New Task text" :onChange="updateTaskText" type="text" />

    <app-button label="Create new task" :onClick="() => {}" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import { State } from 'vuex-class';
  import Component from 'vue-class-component'

  import Login from './Login.vue'
  import Pomodoro from './Pomodoro.vue'

  @Component({
    components: {
      Login,
      Pomodoro
    }
  })
  export default class HomeWrapper extends Vue {
    // @State('timer') state;

    mounted() {
      if (localStorage.getItem('token')) {
        this.$router.push('/pomodoro')
      } else {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
</style>