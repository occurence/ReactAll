import { NavLink } from "react-router-dom";
import { Button } from '../Button/Button';
import css from './Header.module.css';

export const Header = () => {
    return(
        <header className={css.header}>
            <nav>
                <NavLink to="/" end className={({ isActive }) => (isActive ? css.linkActive : css.link)}>Home</NavLink>
                <NavLink to="movies" className={({ isActive }) => (isActive ? css.linkActive : css.link)}>Movies</NavLink>
            </nav>
        </header>
    )
}