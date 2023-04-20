import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header/Header";
import { Loader, StyledScrollToTop } from './App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))

const App = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <StyledScrollToTop smooth />
            <Suspense fallback={<Loader>Loading...</Loader>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="movies" element={<MoviesPage />} />
                </Routes>
            </Suspense>
        </>
    )
};

export default App;