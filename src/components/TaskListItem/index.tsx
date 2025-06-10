import { useDispatch } from "react-redux";
import { ITask } from "../../interfaces"
import { removeTaskAction } from "../../store/actions";

interface IProps {
    task: ITask
}

const TaskListItem = ({task}: IProps) => {
const dispatch = useDispatch();
    const deleteTask = (id: string) => {
        dispatch(removeTaskAction({task}));
    }
    return (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default TaskListItem