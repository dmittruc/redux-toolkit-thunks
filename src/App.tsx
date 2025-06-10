import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import './App.css';
import TaskList from './components/TaskList';
import { RootState } from './store';
import { useState } from 'react';
import { addTaskAction, removeTaskAction } from './store/actions';
import { v4 } from 'uuid';



const App = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();
  const tasks = useAppSelector((state: any) => state.tasks);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

const createNewTask = (title: string, description: string) => {
  if (!title.trim()) return;

  const newTask = {
    id: v4(),
    title,
    description,
    completed: false,
  };

  dispatch(addTaskAction({ task: newTask }));

  setTitle('');
  setDescription('');
};

  return (
    <div className="App">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={() => createNewTask(title, description)}>Create Task</button>
      <TaskList tasks={tasks} />
    </div>
  );
} 

export default App;
