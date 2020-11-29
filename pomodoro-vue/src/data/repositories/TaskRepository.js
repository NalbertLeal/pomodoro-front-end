import Task from '../../domain/entities/Task'

class TaskRepository {
  constructor() {
    this.taskDataSource = new TaskDataSource()
  }
  
  async getAllUserTasks() {
    try {
      const token = localStorage.getItem('token')
      const tasks = await this.taskDataSource.getAllUserTasks(token)
      
      return tasks.map(t => {
        return new Task(
          e.title,
          e.description
        )
      })
    } catch (e) {
      throw e
    }
  }

  async createTask(task) { 
    try {
      const token = localStorage.getItem('token')
      return await this.taskDataSource.createTask(token, task)
    } catch (e) {
      throw e
    }
  }

  async deleteTask(task) {
    try {
      const token = localStorage.getItem('token')
      await this.taskDataSource.deleteTask(token, task)
    } catch (e) {
      throw e
    }
  } 
}

export default TaskRepository