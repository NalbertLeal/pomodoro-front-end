<template>
  <div id="pomodoro-page">
    <header>
      <button id="logout-btn" class="matter-button-contained" v-on:click="logout">Logout</button>
    </header>
    <section id="pomodoro">
      <article id="time">
        00 min 00 sec
      </article>
      <article id="controls">
        <button id="stop" class="matter-button-contained">Stop</button>
        <button id="play-pause" class="matter-button-contained">Play</button>
      </article>
      <article id="pomodoro-stages">
        <article class="pomodoro-stage matter-button-outlined">Work time</article>
        <article class="pomodoro-stage matter-button-outlined">Short Break</article>
        <article class="pomodoro-stage matter-button-outlined">Long Break</article>
      </article>
    </section>
    <section id="tasks">
      <article class="task">
        <button id="delete-task-1" class="matter-button-contained">X</button>
        <p>Title 1</p>
        <p>Description of the task</p>
      </article>
      <article class="task">
        <button id="delete-task-2" class="matter-button-contained">X</button>
        <p>Title 2</p>
        <p>Description of the task</p>
      </article>
      <article class="task">
        <button id="delete-task-3" class="matter-button-contained">X</button>
        <p>Title 3</p>
        <p>Description of the task</p>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import Logout from '../../domain/use_cases/Logout'

  const Base = Vue.extend({
    data() {
      return {
        value: ''
      }
    },
    props: {
      label: String
    },
    watch: {
      value() {
        this.$emit('value', this.value)
      }
    }
  })

  @Component
  export default class Button extends Base {
    minutes: Number = 0
    seconds: Number = 0
    
    get minutesTime() {
      return this.minutes < 10 ? `0${this.minutes}` : this.minutes
    }

    get secondsTime() {
      return this.seconds < 10 ? `0${this.seconds}` : this.seconds
    }

    async logout() {
      const logout = new Logout()
      await logout.execute()
      this.$router.push('/')
    }
  }
</script>

<style scoped>
  #pomodoro-page {
    margin: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }

  button {
    margin: 0rem 0rem 1rem 0rem;
  }

  p {
    margin: 0rem 0rem 1rem 0rem;
  }

  header {
    width: calc(100vw);
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 1rem 0rem 0rem;
    background-color: rgb(33,150,243);
  }

  header #logout-btn,
  header #logout-btn::before,
  header #logout-btn::after {
    color: rgb(33,150,243) !important;
    background-color: #fff !important;
  }

  #pomodoro {
    margin: 2rem 0rem 5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #pomodoro #time {
    height: 6rem;
    margin: 1rem 0rem 1rem 0rem;
    font-size: 4rem;
  }

  #pomodoro #controls {
    width: 30rem;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #pomodoro #pomodoro-stages {
    width: 30rem;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #pomodoro #pomodoro-stages .pomodoro-stage {
    /* background-color: rgb(33,150,243); */
  }

  #pomodoro #pomodoro-stages #pomodoro-stage {
    font-size: 2rem;
  }

  #tasks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #tasks .task {
    width: 30rem;
    margin: 0rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>