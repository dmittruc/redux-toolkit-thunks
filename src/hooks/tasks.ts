import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TRootState, TAppDispatch } from "../store";
import { ITask } from "../interfaces";
import { addTaskAction, removeTaskAction } from "../store/actions";
import { v4 } from 'uuid';

interface IProps {
    task?: ITask
    title?: string
    description?: string
}


const useTasks = ({task, title, description}: IProps) => {
    const dispatch = useDispatch<TAppDispatch>();
    const useAppSelector = useSelector as TypedUseSelectorHook<TRootState>; 
    const tasks = useAppSelector((state) => state.tasks);

    const deleteTask = (task: ITask) => {
        dispatch(removeTaskAction({task}));
    }

    const createNewTask = (title: string, description: string) => {
        if (!title.trim()) return;

        const newTask = {
            id: v4(),
            title,
            description,
            completed: false,
        };

        dispatch(addTaskAction({ task: newTask }));

    };

    return {
        tasks,
        deleteTask,
        createNewTask
    };
}

export default useTasks