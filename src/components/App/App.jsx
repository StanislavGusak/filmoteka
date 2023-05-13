import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header/Header";
import { Loader, StyledScrollToTop } from './App.styled';
import RestictedRoute from "../RestictedRoute/RestictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
const LibraryPage = lazy(() => import('../../pages/LibraryPage/LibraryPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage/LogInPage'));

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
                    <Route
                        path="registration"
                        element={
                            <RestictedRoute redirectTo="/" component={<RegistrationPage />} />
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <RestictedRoute redirectTo="/" component={<LogInPage />} />
                        }
                    />
                    <Route
                        path="library"
                        element={
                            <PrivateRoute redirectTo="/login" component={<LibraryPage />} />
                        }
                    ></Route>
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