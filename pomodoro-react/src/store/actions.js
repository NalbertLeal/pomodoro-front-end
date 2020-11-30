const newTaskAction = text => {
  return {
    type: 'domain/newTask',
    payload: text
  }
}

const deleteTaskAction = index => {
  return {
    type: 'domain/deleteTask',
    payload: id
  }
}

const fiishTaskAction = index => {
  return {
    type: 'domain/finishTask',
    payload: id
  }
}