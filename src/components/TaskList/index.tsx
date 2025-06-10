import { ITask } from "../../interfaces";
import TaskListItem from "../TaskListItem";

interface IProps {
    tasks: ITask[];
}

const TaskList = ({tasks}: IProps) => {

    if (!tasks) {
        return <p>No tasks available</p>;
    }
    
    return (
        <>
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task}/>
            ))}
        </>
    );
}

export default TaskList