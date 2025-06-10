import './App.css';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import useTasks from './hooks/useTasks';



const App = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    fetchTasks()
  }, [])

  const {tasks, loading, error, createNewTask, fetchTasks } = useTasks();
  console.log('loading',loading)
  if (loading){
    return <div>Loading...</div>; 
  } 
 
  if (error) {
    return <div>Error</div>;
  }
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
