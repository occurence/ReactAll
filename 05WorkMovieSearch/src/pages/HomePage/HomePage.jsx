import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { MovieList } from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/themoviedb-api';

// export const HomePage = () => {
const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
            }catch (error){ console.error(error);
            }
        })();
    }, []);

    return(
        <div>
            <h2>Trending Movies</h2>
            {trendingMovies.legth === 0 ? (<Loader />) : (<MovieList movies={trendingMovies} />)}
        </div>
    )
}

export default HomePage;