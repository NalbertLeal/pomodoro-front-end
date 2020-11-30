import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './matter.min.css'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomeWrapper from './presentation/pages/HomeWrapper'
import RegisterNewUserPage from "./presentation/pages/RegisterNewUserPage"
import PomodoroPage from "./presentation/pages/PomodoroPage"

import store from './store/store'

const ContextA = React.createContext();

ReactDOM.render(
  <Provider store={store} context={ContextA}>
    <BrowserRouter>
        <Switch>
            <Route path='/pomodoro' component={PomodoroPage} />
            <Route path='/register-new-user' component={RegisterNewUserPage} />
            <Route path='/' component={HomeWrapper} />
        </Switch>
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
