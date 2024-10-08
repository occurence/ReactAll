import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Restricted } from './Routing/Restricted';
import { Private } from './Routing/Private';

const Others = lazy(() => import('../pages/Others/Others'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <Restricted redirectTo="/others" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <Restricted redirectTo="/others" component={<LoginPage />} />
          }
        />
        <Route
          path="/others"
          element={
            <Private redirectTo="/login" component={<Others />} />
          }
        />
      </Route>
    </Routes>
  );
};
