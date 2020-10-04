import { keccak224 } from 'js-sha3'

class TasksLocalCache {
  get allTasks() {
    return localStorage.getItem('tasks')
  }

  static storeNewTask(task) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const getCurrentUserTasks = localStorage.getItem(`${currentUser.email}:tasks`)
    if (getCurrentUserTasks && getCurrentUserTasks.length > 0) {
      const tasks = JSON.parse(getCurrentUserTasks)
      localStorage.setItem(`${currentUser.email}:tasks`, JSON.stringify(tasks.push(task)))
    } else {
      localStorage.setItem(`${currentUser.email}:tasks`, JSON.stringify([task]))
    }
  }

  static getTasks() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const getCurrentUserTasks = localStorage.getItem(`${currentUser.email}:tasks`)
    if (getCurrentUserTasks && getCurrentUserTasks.length > 0) {
      return getCurrentUserTasks
    } else {
      throw new Error('User without saved tasks')
    }
  }
}

export default TasksLocalCache