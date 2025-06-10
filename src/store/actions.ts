import { IAddTaskAction, IRemoveTaskAction, ISetTasksAction } from "../interfaces/actions";
import { createAction } from "@reduxjs/toolkit";

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction',
);

export const addTaskAction = createAction<IAddTaskAction>(
  'tasks/addTaskAction',
);

export const removeTaskAction = createAction<IRemoveTaskAction>(
  'tasks/removeTaskAction',
);