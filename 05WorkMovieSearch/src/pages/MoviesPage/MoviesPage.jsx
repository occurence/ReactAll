import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieByQuery } from '../../services/themoviedb-api';

export const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const movieName = searchParams.get('query') ?? '';
    const [isLoading, setIsLoading] = useState(false);

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    }

    
    return(
        <div>Movies Page</div>
    )
}