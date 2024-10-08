import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { fetchTasks } from '../../redux/tasks/tasksOperations';
import { selectIsLoadingTasks } from '../../redux/tasks/tasksSelectors';

const TasksPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoadingTasks);
  
    useEffect(() => {
      dispatch(fetchTasks());
    }, [dispatch]);
  
    return(
        <HelmetProvider>
            <Helmet>
            <title>Your tasks....</title>
            </Helmet>
            <TaskForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <TaskList />
        </HelmetProvider>
    )
}

export default TasksPage;