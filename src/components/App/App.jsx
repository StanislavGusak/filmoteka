import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { LoaderWraper, StyledScrollToTop } from './App.styled';
import authOperation from "../../redux/auth/auth-operation";
import authSelector from "../../redux/auth/auth-selector";
import RestictedRoute from "../RestictedRoute/RestictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/CastMovie'));
const GenrePage = lazy(() => import('../../pages/GenrePage/GenrePage'));
const ActorsPage = lazy(() => import('../../pages/ActorsPage/ActorsPage'));
const ActorsInfo = lazy(() => import('../ActorsInfo/ActorsInfo'));
const ExpectedMoviePage = lazy(() => import('../../pages/ExpectedMoviePage/ExpectedMoviePage'));
const TopRatedPage = lazy(() => import('../../pages/TopRatedPage/TopRatedPage'));
const ActorsMoviePage = lazy(() => import('../../pages/ActorsMoviePage/ActorsMoviePage'));
const LibraryPage = lazy(() => import('../../pages/FavouritePage/FavouritePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage/LogInPage'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(authSelector.getIsRefreshing);

    useEffect(() => {
        dispatch(authOperation.refreshCurrentUser());
    }, [dispatch]);
    return isRefreshing ? (
        <LoaderWraper>
            <Loader />
        </LoaderWraper>
    ) : (
        <>
            <ToastContainer />
            <Header />
            <StyledScrollToTop smooth />
            <Suspense
                fallback={
                    <LoaderWraper>
                        <Loader />
                    </LoaderWraper>}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="movies" element={<MoviesPage />} />
                    <Route
                        path="registration"
                        element={<RestictedRoute redirectTo="/" component={<RegistrationPage />} />}
                    />
                    <Route
                        path="login"
                        element={<RestictedRoute redirectTo="/" component={<LogInPage />} />}
                    />
                    <Route
                        path="library"
                        element={<PrivateRoute redirectTo="/login" component={<LibraryPage />} />}
                    />
                    <Route path="actors" element={<ActorsPage />} />
                    <Route path="/actors/movies/:id" element={<ActorsMoviePage />} >
                        <Route path="actors-info" element={<ActorsInfo />} />
                    </Route>
                    <Route path="top-rated" element={<TopRatedPage />} />
                    <Route path="expected" element={<ExpectedMoviePage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
                        <Route path="cast" element={<Cast />} />
                        <Route path="review" element={<Reviews />} />
                    </Route>
                    <Route path="/genre/:id" element={<GenrePage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default App;