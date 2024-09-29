import { MovieListItem } from './MovieListItem/MovieListItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
    return(
        <ul className={css.container}>
            {movies.map(({ id, title, poster_path, release_date }) => (
                <MovieListItem
                    key={id}
                    id={id}
                    title={title}
                    poster={poster_path}
                    release={release_date}
                />
            ))}
        </ul>
    )
}