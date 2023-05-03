import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header/Header";
import { Loader, StyledScrollToTop } from './App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/CastMovie'));
const GenrePage = lazy(() => import('../../pages/GenrePage/GenrePage'));
const ActorsPage = lazy(() => import('../../pages/ActorsPage/ActorsPage'));
const ExpectedMoviePage = lazy(() => import('../../pages/ExpectedMoviePage/ExpectedMoviePage'));
const TopRatedPage = lazy(() => import('../../pages/TopRatedPage/TopRatedPage'));
const ActorsMoviePage = lazy(() => import('../../pages/ActorsMoviePage/ActorsMoviePage'));


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
                    <Route path="movie/actors/" element={<ActorsPage />} />
                    <Route path="/actors/movies/:id" element={<ActorsMoviePage />}></Route>
                    <Route path="movie/top-rated/" element={<TopRatedPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="review" element={<Reviews />} />
                    </Route>
                    <Route path="/genre/:id" element={<GenrePage />} />
                    <Route path="movie/expected-movies/" element={<ExpectedMoviePage />} />
                </Routes>
            </Suspense>
        </>
    )
};

export default App;