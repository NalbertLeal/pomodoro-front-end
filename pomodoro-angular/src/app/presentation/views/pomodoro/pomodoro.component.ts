import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  initialTimer: Date = null
  currentTimer: any = null
  pomodoroCurrentStage: number = 0
  shortRestDiv: boolean = false
  longRestDiv: boolean = false
  workTimeDiv: boolean = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
    }
    this.router.navigate(['/login']);
  }

  calculateTimerMinuterSeconds(currentTimer, initialTimer) {
    const timePassed = currentTimer - initialTimer
    const seconds = Math.floor((timePassed / 1000) % 60)
    const minutes = timePassed > 60000 ? Math.floor(timePassed / 60000) : 0
    return [minutes, seconds]
  }
  
  definePomodoroStage() {
    const [minutes] = this.calculateTimerMinuterSeconds(this.currentTimer, this.initialTimer)
    if (minutes === 5 && (this.pomodoroCurrentStage % 2) === 1) {
        pomodoroCurrentStage: this.pomodoroCurrentStage + 1,
        this.shortRestDiv = false,
        this.workTimeDiv = true//'pomodoro-stage-active'
    } else if (minutes === 15
      && this.pomodoroCurrentStage === 7) {
        this.pomodoroCurrentStage = 0,
        this.shortRestDiv = false,
        this.workTimeDiv = true
    } else if (minutes === 25
      && this.pomodoroCurrentStage === 6) {
        this.pomodoroCurrentStage = 0,
        this.longRestDiv = true,
        this.workTimeDiv = false
    } else if (minutes === 25) {
      this.pomodoroCurrentStage = this.pomodoroCurrentStage + 1,
      this.shortRestDiv = true,
      this.workTimeDiv = false
    }
  }
  
  startTimer() {
    this.initialTimer = new Date()
    this.currentTimer = setInterval(
      () => {
        this.tick()
        this.definePomodoroStage()
      },
      1000
    );
  }
  
  stopTimer() {
    clearInterval(this.currentTimer)
  }
  
  tick() {
    this.currentTimer = new Date()
  }
  
  parseTick(currentTimer, initialTimer) {
    const [minutes, seconds] = this.calculateTimerMinuterSeconds(currentTimer, initialTimer)
    return [
      minutes,
      seconds < 0 ? 0 : seconds
    ]
  }
}
