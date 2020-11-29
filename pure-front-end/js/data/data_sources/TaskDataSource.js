import UserNotFound from '../../exceptions/UserNotFound'
import NoTasksFound from '../../exceptions/NoTasksFound'

class TaskDataSource {
  async getAllUserTasks(token) {
    try {
      const res = await fetch(
        'http://localhost:3818/task?&token=' + token, 
        { 
          method: 'GET',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default'
        })
  
      const resBody = await res.json()
      if (resBody.error) {
        switch(resBody.error) {
          case 'user not found':
            throw new UserNotFound()
          default:
            throw new NoTasksFound()
        }
      }
  
      return resBody['tasks']
    } catch(e) {
      throw e
    }
  }

  async createTask(token, task) {
    try {
      const res = await fetch(
        'http://localhost:3818/task', 
        { 
          method: 'POST',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default',
          body: {
            'token': token,
            'title': task.title,
            'description': task.description
          }
        })
  
      const resBody = await res.json()
      if (resBody.error) {
        throw new UserNotFound()
      }
  
      return resBody.id
    } catch(e) {
      throw e
    }
  } 

  async deleteTask(token, task) {
    try {
      const res = await fetch(
        'http://localhost:3818/task?token=' + token + '&id=' + task.id, 
        { 
          method: 'DELETE',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default'
        })
  
      const resBody = await res.json()
      if (resBody.error) {
        throw new UserNotFound()
      }
  
      return true
    } catch(e) {
      throw e
    }
  }
}

export default TaskDataSource