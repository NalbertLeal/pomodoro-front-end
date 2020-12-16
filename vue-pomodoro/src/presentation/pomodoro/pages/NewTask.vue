<template>
  <section class="new-task-page d-flex justify-content-center align-items-center">
    <div 
      v-if="getIsModalOpen"
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> {{getModalMsg}} </p>
      <Button label="Close" :onClick="closeModal"></Button>
      <!-- <button type="button" class="btn btn-primary" onClick={() => this.setState({ openModal: {open: false, msg: ''} }) }>Close</button> -->
    </div>
    <!-- {
      (this.state.shouldGoPomodoro) &&
      <Redirect to="/pomodoro"></Redirect>
    } -->
    <article class="container p-3 w-50 border">
      <h2>Register new task</h2>
      <Input inputType="text" label="Description" :onClick="setDescription" />
      <!-- <div class="form-group mb-3">
        <label for="description">Description:</label>
        <input type="text" class="form-control" id="description" placeholder="Task description" name="description" v-model="description" />
      </div> -->
      <Button label="Register" :onClick="registerNewTask"></Button>
      <!-- {/* <button type="button" class="btn btn-primary" onClick={() => registerNewUser(name, email, password, rpassword, rememberMe, setOpenModal, setShouldGoPomodoro)}>Submit</button> */} -->
    </article>
  </section>
</template>

<script>
import Button from '@/presentation/core/components/Button'
import Input from '@/presentation/core/components/Input'

import Task from '@/domain/entities/Task.js'
import CreateTask from '@/domain/use_cases/CreateTask.js'

export default {
  components: {
    Button,
    Input
  },
  data() {
    return {
      description: '',
      isModalOpen: false,
      modalMsg: '',
    }
  },
  computed: {
    getIsModalOpen() {
      return this.isModalOpen
    },
    getModalMsg() {
      return this.modalMsg
    }
  },
  methods: {
    setDescription(newDescription) {
      this.description = newDescription
    },
    openModal(msg) {
      this.isModalOpen = true
      this.modalMsg = msg
      this.$forceUpdate()
    },
    closeModal() {
      this.isModalOpen = false
      this.modalMsg = ''
    },
    goToPomodoro() {
      this.$router.push({ name: 'Pomodoro' })
    },
    async registerNewTask() {
      try {
        console.log('okokok1')
        if (this.description === '') {
          this.openModal('Empty description.')
          return
        }
        console.log('okokok2')

        let createTask = new CreateTask()
        
        let task = new Task(this.description)
        await createTask.execute(task)
        this.goToPomodoro()
      } catch(e) {

      }
    }
  }
}
</script>

<style scope>
  .new-task-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>