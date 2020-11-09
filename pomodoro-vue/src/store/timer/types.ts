export interface State {
    timerID: number;
    initialTimer: Date;
    currentTimer: Date;  
    toDoTasks: Array<Number>;
    doneTasks: Number;
    pomodoroCurrentStage: number;
    shortRestDiv: Boolean;
    longRestDiv: Boolean;
    workTimeDiv: Boolean;
}

// export class Timer {
//   initialTimer?: Date = undefined;
//   currentTimer?: Date = undefined;
//   pomodoroCurrentStage: Number = 0;
//   shortRestDiv: Boolean = false;
//   longRestDiv: Boolean = false;
//   workTimeDiv: Boolean = true;
// }

// export class ToDo {
//   toDoTasks: Array<Number> = [];
//   doneTasks: Number = 0;
// }

// export class Task {
//   name: String = '';
// }