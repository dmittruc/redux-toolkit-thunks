import { ITask } from ".";

export interface ISetTasksAction {
  tasks: ITask[];
}

export interface ISetLoadingAction {
  loading: boolean
}

export interface ISetErrorAction {
  error: any
}

export interface IAddTaskAction {
  task: ITask;
}

export interface IRemoveTaskAction {
  taskId: string;
}

export interface IDeleteTaskAsyncAction {
  taskId: string;
}

export interface ICreateTaskAsyncAction {
  title: string;
  description: string;
}