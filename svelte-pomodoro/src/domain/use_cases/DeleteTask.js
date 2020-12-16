import TaskRepository from '../../data/repositories/TaskRepository'

class DeleteTask {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute(taskId) {
    try {
      await this.taskRepository.deleteTask(taskId)
    } catch (e) {
      throw e
    }
  }
}

export default DeleteTask