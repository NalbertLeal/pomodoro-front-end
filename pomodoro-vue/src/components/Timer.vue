<template>
  <section id="timer">
    <p>{{parseTick}}</p>

    <div class="pomodoro-stages">
      <div id="pomodoro-short-rest" class="pomodoro-stage" :class="{'pomodoro-stage-active': shortRestDiv}">Short Rest</div>
      <div id="pomodoro-long-rest" class="pomodoro-stage" :class="{'pomodoro-stage-active': longRestDiv}" >Long Rest</div>
      <div id="pomodoro-work-time" class="pomodoro-stage" :class="{'pomodoro-stage-active': workTimeDiv}" >Work Time</div>
    </div>

    <div id="time-bar" />
  </section>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Timer',
    computed: {
      ...mapState([
        'initialTimer',
        'currentTimer',
        'pomodoroCurrentStage',
        'shortRestDiv',
        'longRestDiv',
        'workTimeDiv'
      ]),
      ...mapGetters([
        'parseTick'
      ])
    },
    methods: {
      ...mapActions([
        'startTimer'
      ]),
      ...mapMutations([
        'stopTimer',
        'tick'
      ])
    },
    mounted() {
      this.startTimer()
    }
  }
</script>

<style scoped>
  #timer {
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pomodoro-stages {
    width: 100vw;
    height: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .pomodoro-stages .pomodoro-stage {
    width: 7rem;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightpink;
    font-weight: bold;
  }

  .pomodoro-stages .pomodoro-stage-active {
    background-color: tomato !important;
    color: white;
  }

  .tasks-indicator {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 5vw;
    box-sizing: border-box;
  }
</style>