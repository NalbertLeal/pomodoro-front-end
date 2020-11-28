import Task from '../../domain/entities/Task'

class TaskRepository {
  constructor() {
    this.taskDataSource = new TaskDataSource()
  }
  
  async getAllUserTasks(user) {
    try {
      const tasksJSONList = await this.taskDataSource.getAllUserTasks(user)
      const tasksList = tasksJSONList.map(t => {
        return new Task(
          e.title,
          e.description
        )
      })
      return tasksList
    } catch (e) {
      throw e
    }
  }

  async createTask(user, task) { 
    try {
      await this.taskDataSource.createTask(user, task)
    } catch (e) {
      throw e
    }
  }

  async deleteTask(task) {
    try {
      await this.taskDataSource.deleteTask(task)
    } catch (e) {
      throw e
    }
  } 
}

export default TaskRepository