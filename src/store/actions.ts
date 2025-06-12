import { TRootState } from ".";
import { descriptionRegex, titleRegex } from "../constans";
import { ITask } from "../interfaces";
import { IAddTaskAction, ICreateTaskAsyncAction, IDeleteTaskAsyncAction, IRemoveTaskAction, ISetErrorAction, ISetLoadingAction, ISetTasksAction } from "../interfaces/actions";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'tasks/setLoadingAction',
);

export const setErrorAction = createAction<ISetErrorAction>(
  'tasks/setErrorAction',
);

export const addTaskAction = createAction<IAddTaskAction>(
  'tasks/addTaskAction',
);

export const removeTaskAction = createAction<IRemoveTaskAction>(
  'tasks/removeTaskAction',
);

export const fetchTasksAsyncAction = createAsyncThunk(
  'tasks/fetchTasksAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const tasks = await response.json();
      dispatch(setTasksAction({ tasks: tasks}))
      dispatch(setErrorAction({ error: undefined }));
    } catch (error) {
      dispatch(setErrorAction({ error: error }));
      console.log('Error: tasks/fetchTasksAsyncAction', error);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
)

export const deleteTasksAsyncAction = createAsyncThunk<void, IDeleteTaskAsyncAction, { state: TRootState }>(
  'tasks/deleteTasksAsyncAction',
  async ({ taskId }: IDeleteTaskAsyncAction, {getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('[deleteTasksAsyncAction] taskId:', taskId);

      const state = getState();
      const task = state.tasks.tasks.find((task: ITask) => task.id === taskId); 
      if (!task) {
        console.log('Task not found');
        return;
      }
      dispatch(removeTaskAction({ taskId: taskId }));
    } catch (error) {
      dispatch(setErrorAction({ error: error }));
      console.log('Error: tasks/fetchTasksAsyncAction', error);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
)

export const createTaskAsyncAction = createAsyncThunk<
void, ICreateTaskAsyncAction
>(
  'tasks/createTaskAsyncAction',
  async (
    { title, description }: ICreateTaskAsyncAction, 
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      if (!titleRegex.test(title)) {
        console.log('Invalid title format (3-12 chars, letters/numbers/spaces only)');
      }
      if (!descriptionRegex.test(description)) {
        console.log('Invalid description format (3-100 chars, letters/numbers/spaces only)');
      }
      const newTask: ITask = {
        id: Date.now().toString(),
        title: title,
        description: description,
      }

      dispatch(addTaskAction({ task: newTask }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (error) {
      dispatch(setErrorAction({ error: error }));
      console.log('Error: tasks/createTaskAsyncAction', error);
    }
    finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
)