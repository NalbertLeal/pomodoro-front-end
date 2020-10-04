import TasksLocalCache from '../dataSource/TasksLocalCache'
import TasksServer from '../dataSource/TasksServer'

class TasksRepository {
  static getTasks() {
    if (navigator.onLine) {
      // TasksServer
    } else {
      TasksLocalCache.getTasks()
    }
  }

  static saveNewTask(task) {
    if (navigator.onLine) {
      // TasksServer
    }
    TasksLocalCache.getTasks()
  }
}

export default TasksRepository