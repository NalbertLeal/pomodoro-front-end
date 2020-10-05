import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import AutheticationPage from "./components/pages/AutheticationPage";
import TimerPage from "./components/pages/TimerPage";

import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history'

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path='/timer' component={TimerPage} />
      <Route path='/' component={AutheticationPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
