import { createStore } from 'redux'

import initialState from './initialState.js'
import reducer from './reducer.js'

const store = createStore(reducer, initialState)

export default store