import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const CastList = lazy(() => import('./CastList/CastList'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage /> } />
        <Route path="movies/:movieId" element={<MovieDetailsPage /> } >
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList /> } />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" /> } />
    </Routes>
  );
};
