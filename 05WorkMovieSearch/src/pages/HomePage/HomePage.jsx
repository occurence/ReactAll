import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { MovieList } from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/themoviedb-api';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        (async() => {
            try{
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
            }catch(error){ console.error(error);}
        })();
    }, []);

    return(
        <main>
            <h2>HOME PAGE: Trending Movies</h2>
            {trendingMovies.length === 0 ? <Loader /> : <MovieList movies={trendingMovies} />}
        </main>
    )
}

export default HomePage;