import TaskRepository from '../../data/repositories/TaskRepository'

class CreateTask {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute(user, task) {
    try {
      await this.taskRepository.createTask(user, task)
    } catch (e) {
      throw e
    }
  }
}

export default CreateTask