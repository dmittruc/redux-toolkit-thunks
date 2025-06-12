import { ITask } from "../../interfaces"
import useTasks from "../../hooks/useTasks";

interface IProps {
    task: ITask
}

const TaskListItem = ({task}: IProps) => {

    const {deleteTask} = useTasks();
    
    return (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default TaskListItem