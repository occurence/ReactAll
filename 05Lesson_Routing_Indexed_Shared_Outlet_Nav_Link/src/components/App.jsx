import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { Mission } from './Mission/Mission';
import { Team } from './Team/Team';
import { Reviews } from './Reviews/Reviews';
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';

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
