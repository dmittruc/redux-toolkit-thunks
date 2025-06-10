import { TypedUseSelectorHook, useSelector } from 'react-redux';
import './App.css';
import TaskList from './components/TaskList';
import { RootState } from './store';

const App = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const tasks = useAppSelector((state: any) => state.tasks);

  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('');

  // const createNewTask = (title, description) => {}

  return (
    <div className="App">
      {/* <button onClick={() => createNewTask(title, description)}>Create Task</button> */}
      <TaskList tasks={tasks} />
    </div>
  );
} 

export default App;
