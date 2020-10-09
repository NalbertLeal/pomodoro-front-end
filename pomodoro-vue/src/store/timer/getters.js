export default {
  parseTick(store) {
    const timePassed = store.currentTimer - store.initialTimer

    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0

    return `${minutes} : ${seconds < 0 ? 0 : seconds}`
  }
}