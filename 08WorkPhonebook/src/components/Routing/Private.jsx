import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const Private = ({ component: Component, redirectTo = "/" }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}