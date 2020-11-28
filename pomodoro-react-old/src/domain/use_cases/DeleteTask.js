import TaskRepository from '../../data/repositories/TaskRepository'

class DeleteTask {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute(task) {
    try {
      this.taskRepository.deleteTask(task)
    } catch (e) {
      throw e
    }
  }
}

export default DeleteTask