import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from '../Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
    return(
        <div className={css.container}>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
}