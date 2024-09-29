import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
    return(
        <div className={css.container}>
            <Header />
            <Suspense fallback={<div>LOADING PAGE</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}