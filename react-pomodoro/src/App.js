import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginPage from './presentation/auth/page/login_page'
import RegisterPage from './presentation/auth/page/register_page'
import PomodoroPage from './presentation/pomodoro/page/pomodoro_page'
import NewTaskPage from './presentation/pomodoro/page/new_task_page'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/new-task' component={NewTaskPage}></Route>
        <Route path='/pomodoro' component={PomodoroPage}></Route>
        <Route path='/register' component={RegisterPage}></Route>
        <Route path='/' component={LoginPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
