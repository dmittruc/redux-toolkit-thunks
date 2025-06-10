import { createReducer } from "@reduxjs/toolkit";
import { ITasksReducerState } from "../interfaces/reducers";
import { addTaskAction, removeTaskAction, setTasksAction } from "./actions";
import { ITask } from "../interfaces";

const tasks = [
    { id: '1', title: 'Task 1', description: 'Description 1', completed: false },
    { id: '2', title: 'Task 2', description: 'Description 2', completed: true },
    { id: '3', title: 'Task 3', description: 'Description 3', completed: false },
  ]

const initialState: ITasksReducerState = {
  tasks: tasks,
};

const tasksReducer = createReducer<ITasksReducerState>(initialState, builder =>
  builder
    .addCase(setTasksAction, (store, { payload: { tasks } }) => ({
      ...store,
      tasks: tasks,
    }))
    .addCase(addTaskAction, (store, { payload: { task } }) => ({
      ...store,
      tasks: [...store.tasks, task],
    }))
    .addCase(removeTaskAction, (store, { payload: { task } }) => ({
      ...store,
      tasks: store.tasks.filter(
        (currentTask: ITask) => currentTask.id !== task.id,
      ),
    })),
);

export default tasksReducer;