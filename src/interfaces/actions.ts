import { ITask } from ".";

export interface ISetTasksAction {
  tasks: ITask[];
}

export interface IAddTaskAction {
  task: ITask;
}

export interface IRemoveTaskAction {
  task: ITask;
}