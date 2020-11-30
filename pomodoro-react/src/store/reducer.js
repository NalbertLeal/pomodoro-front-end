import initialState from './initialState.js'

const reducers = {
  'domain/newTask': () => { },
  'domain/deleteTask': () => { },
  'domain/finishTask': () => { }
}

export default function (state = initialState, action = { type: 'undefined' }) {
  try {
    const result = reducers[action.type](state)
    return result ? result : state
  } catch (e) {
    console.error(e)
    return state
  }
}