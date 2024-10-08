import { useSelector } from 'react-redux';
import { TaskListItem } from './TaskListItem/TaskListItem';
import { selectTasks } from '../../redux/tasks/tasksSelectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <TaskListItem id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
