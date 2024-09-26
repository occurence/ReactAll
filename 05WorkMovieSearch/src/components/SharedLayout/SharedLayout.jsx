import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Footer } from '../Footer/Footer';
import css from './SharedLayout.module.css';

// export const SharedLayout = () => {
const SharedLayout = () => {
    return(
        <>
            <div className={css.container}>
                <Header />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
                <Footer />
            </div>
        </>
    )
}

export default SharedLayout;