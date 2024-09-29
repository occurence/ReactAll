import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { HomePage } from '../pages/HomePage/HomePage';
// import { AboutPage } from '../pages/AboutPage/AboutPage';
// import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
// import { Mission } from './Mission/Mission';
// import { Team } from './Team/Team';
// import { Reviews } from './Reviews/Reviews';
// import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage/ProductDetailsPage'));
const Mission = lazy(() => import('./Mission/Mission'));
const Team = lazy(() => import('./Team/Team'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } >
          <Route path="mission" element={ <Mission />} />
          <Route path="team" element={ <Team /> } />
          <Route path="reviews" element={ <Reviews /> } />
        </Route>
        <Route path="products" element={ <ProductsPage /> } />
        <Route path="products/:id" element={ <ProductDetailsPage /> } />
      </Route>
    </Routes>
  );
};
