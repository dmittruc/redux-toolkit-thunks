import './App.css';
import TaskList from './components/TaskList';
import { useState } from 'react';
import useTasks from './hooks/tasks';



const App = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const {tasks, createNewTask } = useTasks({title, description});

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
