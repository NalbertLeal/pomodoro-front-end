<script>
  import page from 'page'

  import Button from './../../core/components/Button.svelte'
  import Input from './../../core/components/Input.svelte'

  import Task from './../../../domain/entities/Task.js'
  import CreateTask from './../../../domain/use_cases/CreateTask.js'

  let description = ''
  let isModalOpen = false
  let modalMsg = ''
  
  function setDescription(v) {
    description = v
  }

  function openModal(msg) {
    isModalOpen = true
    modalMsg = msg
  }

  function closeModal() {
    isModalOpen = false
    modalMsg = ''
  }

  function goToPomodoro() {
    page('/pomodoro')
  }

  async function registerNewTask() {
    try {
      if (description === '') {
        openModal('Empty description.')
        return
      }

      let createTask = new CreateTask()
      
      let task = new Task(description)
      await createTask.execute(task)
      goToPomodoro()
    } catch(e) {
      console.error(e)
    }
  }
</script>

<style>
  .new-task-page {
    width: 100vw;
    min-height: 100vh;
  }
</style>

<section class="new-task-page d-flex justify-content-center align-items-center">
  {#if isModalOpen}
    <div
      class="w-50 p-3 bg-white border zindex-modal position-absolute"
    >
      <p> { modalMsg } </p>
      <Button label="Close" onClick={() => closeModal()}></Button>
    </div>
  {/if}
  <article class="container p-3 w-50 border">
    <h2>Register new task</h2>
    <Input inputType="text" label="Description" onClick={setDescription} />
    <Button label="Register" onClick={registerNewTask} />
    <!-- {/* <button type="button" class="btn btn-primary" onClick={() => registerNewUser(name, email, password, rpassword, rememberMe, setOpenModal, setShouldGoPomodoro)}>Submit</button> */} -->
  </article>
</section>