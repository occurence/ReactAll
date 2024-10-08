import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Restricted } from './Routing/Restricted';
import { Private } from './Routing/Private';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing User</b>) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <Restricted redirectTo="/contacts" component={<RegisterPage />}/>} />
        <Route path="/login" element={
          <Restricted redirectTo="/contacts" component={<LoginPage />}/>} />
        <Route path="/contacts" element={
          <Private redirectTo="/login" component={<ContactsPage />}/>} />
      </Route>
    </Routes>
  )
};