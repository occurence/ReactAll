import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieByQuery } from '../../services/themoviedb-api';

// export const MoviesPage = () => {
const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const movieName = searchParams.get('query') ?? '';
    const [isLoading, setIsLoading] = useState(false);

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    }

    useEffect(() => {
        (async () =>{
            try{
                setIsLoading(true);
                const movies = await fetchMovieByQuery(movieName);
                setSearchResults(movies);
            }catch (error){ console.error(error);
            }finally{ setIsLoading(false);
            }
        })();
    }, [movieName]);

    return(
        <div>
            <SearchBar value={movieName} onChange={updateQueryString}/>
            {/* {searchResults.length === 0 ? <Loader /> : <MovieList movies={searchResults}/>} */}
            {isLoading ? <Loader /> : movieName && searchResults.length === 0 ? <h2>No results</h2> : <MovieList movies={searchResults}/>}
        </div>
    )
}

export default MoviesPage;