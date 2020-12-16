import TaskRepository from '../../data/repositories/TaskRepository'

class CreateTask {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute(task) {
    try {
      task.id = await this.taskRepository.createTask(task)
    } catch (e) {
      throw e
    }
  }
}

export default CreateTask