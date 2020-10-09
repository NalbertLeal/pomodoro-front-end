export default {
  startTimer({ commit, state}) {
    state.initialTimer = new Date()

    state.timerID = setInterval(
      () => {
        commit('tick')
      },
      1000
    );
  },
  stopTimer({ commit }) {
    commit('stopTimer')
  }
}