import TaskRepository from '../../data/repositories/TaskRepository'

class GetUserTasks {
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute() {
    try {
      return await this.taskRepository.getAllUserTasks()
    } catch (e) {
      throw e
    }
  }
}

export default GetUserTasks