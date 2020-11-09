import { GetterTree } from 'vuex'
import { State } from './types'
import { RootState } from '../types'

export const getters: GetterTree<State, RootState> = {
  parseTick(store) {
    const timePassed = store.currentTimer.getTime() - store.initialTimer.getTime()

    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    return `${minutes} : ${seconds < 0 ? 0 : seconds}`
  }
}