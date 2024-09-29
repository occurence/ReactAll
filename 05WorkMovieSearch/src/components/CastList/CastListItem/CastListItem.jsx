import css from './CastListItem.module.css';

export const CastListItem = ({ profilePath, originalName, name }) => {
    return(
        <li className={css.castListItem}>
            <img
                // width="200px"
                // height="300px"
                src={ profilePath ? `https://image.tmdb.org/t/p/w300${profilePath}` : `https://fakeimg.pl/600x400?text=No+Image+Available` }//200x300
                alt={originalName}
            />
            <p>{name}</p>
        </li>
    )
}