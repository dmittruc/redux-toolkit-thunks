import { ITask } from ".";

export interface ITasksReducerState {
  tasks: ITask[];
  loading: boolean;
  error: any;
}
