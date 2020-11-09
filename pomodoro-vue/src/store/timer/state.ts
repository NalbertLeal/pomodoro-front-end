export default class State {
  initialTimer?: Date = undefined;
  currentTimer?: Date = undefined;
  toDoTasks: Array<Number> = [];
  doneTasks: Number = 0;
  pomodoroCurrentStage: Number = 0;
  shortRestDiv: Boolean = false;
  longRestDiv: Boolean = false;
  workTimeDiv: Boolean = true;
}