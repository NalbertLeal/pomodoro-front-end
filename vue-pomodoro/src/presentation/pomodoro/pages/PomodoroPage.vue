<template>
  <section class="pomodoro-page d-flex flex-column justify-content-start align-items-center">
    <article class="timer w-100 p-3 mb-5 border d-flex justify-content-end">
      <Button label="Logout" :onClick="() => logout()"></Button>
    </article>
    <article class="timer w-50 p-3 mb-3 border d-flex justify-content-center">
      <h3> {{this.parseMinutes()}} minutes {{this.parseSeconds()}} seconds </h3>
    </article>
    <article class="pomodoro-stage w-50 p-3 mb-3 border d-flex justify-content-center">
      Now its time to {{this.pomodoroStage}}
    </article>
    <article class="pomodoro-controls w-50 p-3 mb-3 border d-flex justify-content-around">
      <Button label="Start" :onClick="() => startTimer()"></Button>
      <Button label="Reset" :onClick="() => resetTimer()"></Button>
    </article>
    <article class="tasks w-50 p-3 border d-flex flex-column justify-content-around align-items-center">
      <Button label="New Task" :onClick="() => goToNewTask()"></Button>
      <article 
        v-for="t in tasks"
        :key="t.id" 
        class="tasks-list w-100 mt-3 border p-2"
      >
        <span class="w-25"> <Button label="X" :onClick="() => deleteTask(t.id)"></Button> </span>
        <span class="w-75">{{t.description}}</span>
      </article>
    </article>
  </section>
</template>

<script>
import Button from '@/presentation/core/components/Button'

import Task from '@/domain/entities/Task.js'
import Logout from '@/domain/use_cases/Logout.js'
import CreateTask from '@/domain/use_cases/CreateTask.js'
import GetUserTasks from '@/domain/use_cases/GetUserTasks.js'
import DeleteTask from '@/domain/use_cases/DeleteTask.js'
import StartPomodoro from '@/domain/use_cases/StartPomodoro.js'
import ResetPomodoro from '@/domain/use_cases/ResetPomodoro.js'
import PausePomodoro from '@/domain/use_cases/PausePomodoro.js'
import InvalidUser from '@/exceptions/InvalidUser.js'

export default {
  components: {
    Button
  },
  data() {
    return {
      timer: 1500000,
      pomodoroStage: 'word',
      tasks: []
    }
  },
  async mounted() {
    this.isAuthenticated()
    await this.getTasks()
  },
  methods: {
    goToNewTask() {
      this.$router.push('/new-task')
    },
    goToLogin() {
      this.$router.push({ name: 'LoginPage' })
      // window.location = 'localhost:8080/'
    },
    isAuthenticated() {
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')

      const token = tokenLS || tokenSS

      console.log(token)
      
      if (!token) {
        this.goToLogin()
      }
    },
    parseMinutes() {
      const minutes = Math.floor((this.timer / 1000) / 60)
      return minutes < 10 ? `0${minutes}` : minutes
    },
    parseSeconds() {
      const seconds = Math.floor((this.timer / 1000) % 60)
      return seconds < 10 ? `0${seconds}` : seconds
    },
    startTimer() {
      const startPomodoro = new StartPomodoro()
      startPomodoro.execute((timer, stage) => {
        this.timer = timer,
        this.pomodoroStage = stage
      })
    },
    resetTimer() {
      const resetPomodoro = new ResetPomodoro()
      resetPomodoro.execute()
    },
    async logout() {
      try {
        const logout = new Logout()
        await logout.execute()
      } catch(e) {
        console.error(e)
      }
      this.goToLogin()
    },
    async getTasks() {
      try {
        const getUserTasks = new GetUserTasks()
        this.tasks = await getUserTasks.execute()
      } catch(e) {
        console.error(e)
      }
    },
    async deleteTask(taskId) {
      try {
        const deleteTask = new DeleteTask()
        await deleteTask.execute(taskId)
        console.log(this.tasks.length)
        this.tasks = this.tasks.filter(e => {
          if (e.id != taskId) {
            return e
          }
        })
      } catch(e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
  .pomodoro-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>