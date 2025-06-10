import { createReducer } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces";
import { ITasksReducerState } from "../../interfaces/reducers";
import { addTaskAction, removeTaskAction, setErrorAction, setLoadingAction, setTasksAction } from "../actions";

const initialState: ITasksReducerState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksReducer = createReducer<ITasksReducerState>(initialState, builder =>
  builder
    .addCase(setTasksAction, (store, { payload: { tasks } }) => ({
      ...store,
      tasks: tasks,
    }))
    .addCase(addTaskAction, (store, { payload: { task } }) => ({
      ...store,
      tasks: [task, ...store.tasks],
    }))
    .addCase(removeTaskAction, (store, { payload: { task } }) => ({
      ...store,
      tasks: store.tasks.filter(
        (currentTask: ITask) => currentTask.id !== task.id,
      ),
    }))
    .addCase(setErrorAction, (store, { payload: { error } }) => ({
      ...store,
      error: error,
    }))
    .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
      ...store,
      loading: loading,
    })),
);

export default tasksReducer;