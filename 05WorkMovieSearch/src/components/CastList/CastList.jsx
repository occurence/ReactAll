import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/themoviedb-api';
import { CastListItem } from './CastListItem/CastListItem';
import css from './CastList.module.css';

const CastList = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        (async() => {
            try{
                const response = await fetchMovieCast(movieId);
                setCast(response);
            }catch(error){console.error(error);}
        })();
    }, [movieId]);

    return(
        <>
            {cast.length !== 0 && (
                <div>
                    <h2>Movie Cast</h2>
                    <ul className={css.castList}>
                        {cast.map(({ id, profile_path, original_name, name }) => (
                            <CastListItem key={id} id={id} profilePath={profile_path} originalName={original_name} name={name}/>
                        ))}
                    </ul>
                </div>
            )}
            {/* {cast} */}
            {cast.length === 0 && <div>No casts for this movie.</div>}
                {/* <div>Cast List
                    <CastListItem casts={cast}/>
                </div> */}
        </>
    )
}
export default CastList;