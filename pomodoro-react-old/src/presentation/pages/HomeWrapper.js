import React from 'react'
// import { Redirect } from 'react-router';

import LoginPage from './LoginPage'
import PomodoroPage from './PomodoroPage'

function HomeWrapper() {
  if (localStorage.getItem('token')) {
    return <PomodoroPage></PomodoroPage>
  }
  return <LoginPage></LoginPage>
}

export default HomeWrapper