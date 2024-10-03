import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <p  className={css.nav}>
          <img src={require("../../images/expenseTracker192.png")} alt=""style={{width: "30px", height: "30px"}}/>EXPENSETRACKER
        </p>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/others"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Others
        </NavLink>
      )}
    </nav>
  );
};
