import { useLocation, Link } from 'react-router-dom';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ id, title, poster, release}) => {
    const location = useLocation();

    return(
        <li className={css.movieListItem}>
            <Link to={`/movies/${id}`} state={{ from: location }} className={css.link}>
                <img
                    // width="200px"
                    // height="300px"
                    src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : `https://fakeimg.pl/200x300?text=No+Image+Available`}
                    alt={title}
                    className={css.image}
                />
                <h4>{title}</h4>
                <span>{new Date(release).getFullYear()}</span>
            </Link>
        </li>
    )
}