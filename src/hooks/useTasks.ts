import { useDispatch, useSelector } from "react-redux";
import { TRootState, TAppDispatch } from "../store";
import { ITask } from "../interfaces";
import { createTaskAsyncAction, deleteTasksAsyncAction, fetchTasksAsyncAction, removeTaskAction } from "../store/actions";

const useTasks = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const tasks = useSelector<TRootState, ITask[]>(
        (state: TRootState) => state.tasks.tasks,
    );

    const error = useSelector<TRootState, any>(
        (state: TRootState) => state.tasks.error,
    );

    const loading = useSelector<TRootState, boolean>(
        (state: TRootState) => state.tasks.loading,
    );
    
    const fetchTasks = () => {
        dispatch(fetchTasksAsyncAction())
    }

    const createNewTask = (title: string, description: string) => {
        dispatch(createTaskAsyncAction({title, description}));
    }

    const deleteTask = (taskId: string) => {
        dispatch(deleteTasksAsyncAction({taskId}));
    }

    return {
        tasks,
        error,
        loading,
        fetchTasks,
        createNewTask,
        deleteTask,
    };
}

export default useTasks