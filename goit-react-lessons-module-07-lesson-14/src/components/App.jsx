import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState('');
  // addTask = (newTask) => {
  //   // this.setState(prevState => ({
  //   //   tasks: [...prevState.tasks, newTask],
  //   // }));
  //   setTasks(...prevState.tasks, newTask);
  // }
  return (
    <div>
      <TaskForm/>
      {/* addTask={addTask} */}
      <TaskList />
    </div>
  );
};
