import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { fetchTasks } from '../redux/tasks/tasksOperations';
import { refreshUser } from '../redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Restricted } from './Routing/Restricted';
import { Private } from './Routing/Private';

const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing User</b>) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <Restricted redirectTo="/tasks" component={<RegisterPage />}/>} />
        <Route path="/login" element={
          <Restricted redirectTo="/tasks" component={<LoginPage />}/>} />
        <Route path="/tasks" element={
          <Private redirectTo="/login" component={<TasksPage />}/>} />
      </Route>
    </Routes>
  )
};