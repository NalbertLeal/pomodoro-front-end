import React from 'react'
import { Redirect } from 'react-router';

import Button from '../../core/components/button'

import CreateTask from '../../../domain/use_cases/CreateTask'
import Task from '../../../domain/entities/Task';

class NewTaskPage extends React.Component {
  constructor() {
    super()
    
    const tokenLS = localStorage.getItem('token')
    const tokenSS = sessionStorage.getItem('token')

    this.state = {
      description: '',
      openModal: {open: false, msg: ''},
      shouldGoPomodoro: false,
      isLoged: tokenLS || tokenSS ? true : false,
    }
  }

  async registerNewTask(description) {
    try {
      if (this.state.description === '') {
        this.setState({ openModal: {open: true, msg: 'Empty description.'} })
        return
      }      
      
      let createTask = new CreateTask()
      
      let task = new Task(description)
      await createTask.execute(task)
      this.setState({ shouldGoPomodoro: true })
    } catch(e) {

    }
  }

  render() {
    return (
      <section className="register-page d-flex justify-content-center align-items-center">
        {
          this.state.openModal.open &&
          <div className="w-50 p-3 bg-white border zindex-modal position-absolute">
            <p> {this.state.openModal.msg} </p>
            <button type="button" className="btn btn-primary" onClick={() => this.setState({ openModal: {open: false, msg: ''} }) }>Close</button>
          </div>
        }
        {
          (this.state.shouldGoPomodoro) &&
          <Redirect to="/pomodoro"></Redirect>
        }
        <article className="container p-3 w-50 border">
          <h2>Register new task</h2>
          <div className="form-group mb-3">
            <label for="description">Description:</label>
            <input type="text" className="form-control" id="description" placeholder="Task description" name="description" onChange={(e) => this.setState({ description: e.target.value }) }></input>
          </div>
          <Button label="Register" onClick={() => this.registerNewTask(this.state.description)}></Button>
          {/* <button type="button" className="btn btn-primary" onClick={() => registerNewUser(name, email, password, rpassword, rememberMe, setOpenModal, setShouldGoPomodoro)}>Submit</button> */}
        </article>
      </section>
    )
  }
}

export default NewTaskPage