import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/themoviedb-api";
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    // const backLinkHref = useRef(location.state?.from || '/');
    
    useEffect(() => {
        (async() => {
            try{
                const movie = await fetchMovieDetails(movieId);
                setMovieDetails(movie);
            }catch(error){ console.error(error);}
        })();
    }, [movieId]);

    if(!movieDetails){
        return <Loader />;
    }
    return(
        // <div>Movie Details Page</div>
        <>
            {/* <Link to={backLinkHref.current}> */}
            <Link to={backLinkHref}>
                <Button text="Go back" />
            </Link>

            <div className={css.movieDetailsContainer}>
                <img
                    width="300px"
                    height="500px"
                    src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : `https://fakeimg.pl/600x400?text=No+Image+Available`}//600x400
                    alt={movieDetails.title}
                    className={css.image}
                />
                <div className={css.movieDetailsWrap}>
                    <h1>{movieDetails.title}</h1>
                    <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
                    <h2>Overview</h2>
                    <p>{movieDetails.overview}</p>
                    <h2>Genres</h2>
                    {/* {movieDetails.genres.map(genre => <li key={genre.id}>{genre.id}</li>)} */}
                    {/* <p>{movieDetails.genres.map(genre => (<span key={genre.id}> {genre.name}</span>))}</p> */}
                    {/* <p>{movieDetails.genres}</p> */}
                    {/* <p>{movieDetails.genres.map(({id, name}) => (<span key={id}>{name}</span>))}</p> */}
                    {/* <p>{movieDetails.genres.map((genre) => (<span key={genre.id}>{genre.name}</span>))}</p> */}
                    {/* <p>{movieDetails.genre}</p> */}
                    {/* <p>{movieDetails.genres.map(genre => (<span key={genre.id}>{genre.name}</span>))}</p> */}
                    {/* <p>{movieDetails.genres.name}</p> */}
                    {/* <p>{movieDetails.genres}</p> */}
                    {/* <p>{movieDetails}</p> */}
                    {/* <div>{movieDetails.genres.map(({ id, name }) => ( <p key={id}>{name}</p> ))}</div> */}
                    {/* <div>{movieDetails.genres.map(({ id, name }) => ( <div key={id}>{name}</div> ))}</div> */}
                    {/* <div>{movieDetails.genres.map(genre => <MovieDetailsItem key={genre.id} name={genre.name}/>)}</div> */}
                    {/* <ul>{movieDetails.genres.map(({ id, name }) => ( <li key={id}>{name}</li> ))}</ul> */}
                    {/* <p>{movieDetails.genres.name.map(genre => (<span key={genre.id}></span>))}</p> */}
                    <p>{movieDetails.genres?.map(genre => (<span key={genre.id}>{genre.name} </span>))}</p>
                </div>
            </div>
            <hr />
            <h3>Additional Information</h3><br />
            <Link to="cast">
                <Button text="Cast"/>
            </Link>
            <Link to="reviews">
                <Button text="Reviews"/>
            </Link>
            <hr />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
}
export default MovieDetailsPage;