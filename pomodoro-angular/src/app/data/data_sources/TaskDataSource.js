import UserNotFound from '../../exceptions/UserNotFound'
import NoTasksFound from '../../exceptions/NoTasksFound'

class TaskDataSource {
  async getAllUserTasks(user) {
    throw new UserNotFound()
    throw new NoTasksFound()
    
    return []
  }

  async createTask(user, task) {
    throw new UserNotFound()
    return true
  }

  async deleteTask(task) {
    
  }
}

export default TaskDataSource