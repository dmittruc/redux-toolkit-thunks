import { ITask } from "../../interfaces"

interface IProps {
    task: ITask
}

const TaskListItem = ({task}: IProps) => {
    return (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskListItem