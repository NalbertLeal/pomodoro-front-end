import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import AutheticationPage from "./components/pages/AutheticationPage";
import CreateNewUserPage from "./components/pages/CreateNewUserPage";
import TimerPage from "./components/pages/TimerPage";

import store from './store/store'

const ContextA = React.createContext();

ReactDOM.render(
  <Provider store={store} context={ContextA}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path='/timer' component={TimerPage} />
        <Route path='/create-new-user' component={CreateNewUserPage} />
        <Route path='/' component={AutheticationPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
