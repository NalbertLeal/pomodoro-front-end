import TaskRepository from '../../data/repositories/TaskRepository'

class GetUserTasks {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  execute(user, task) {
    try {
      this.taskRepository.createTask(user, task)
    } catch (e) {
      throw e
    }
  }
}

export default GetUserTasks