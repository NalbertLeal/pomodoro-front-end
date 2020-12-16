import Task from '../../domain/entities/Task'
import TaskDataSource from '../data_sources/TaskDataSource'

class TaskRepository {
  constructor() {
    this.taskDataSource = new TaskDataSource()
  }
  
  async getAllUserTasks() {
    try {
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')

      const token = tokenLS || tokenSS
      const tasks = await this.taskDataSource.getAllUserTasks(token)
      
      return tasks.map(t => {
        return new Task(
          t.description,
          t.id
        )
      })
    } catch (e) {
      throw e
    }
  }

  async createTask(task) { 
    try {
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')

      const token = tokenLS || tokenSS
      return await this.taskDataSource.createTask(token, task)
    } catch (e) {
      throw e
    }
  }

  async deleteTask(taskId) {
    try {
      const tokenLS = localStorage.getItem('token')
      const tokenSS = sessionStorage.getItem('token')

      const token = tokenLS || tokenSS
      await this.taskDataSource.deleteTask(token, taskId)
    } catch (e) {
      throw e
    }
  } 
}

export default TaskRepository