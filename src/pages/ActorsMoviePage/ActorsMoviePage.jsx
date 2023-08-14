import { useState, useEffect, Suspense } from "react";
import {
    Link,
    useParams,
    useLocation,
    Outlet,
} from 'react-router-dom';
import { toast } from "react-toastify";
import apiTheMovieDB from "../../services/kinoApi";
import Container from "../../components/Container/Container";
import MoviesList from "../../components/MoviesList/MoviesList";
import BackDown from "../../components/BackDown/BackDown";
import {
    BtnBackWrapper,
    ActorsMoviesTitle,
    ActorsMoreInfo,
} from './ActorsMoviePage.styled';

const ActorsMoviesPage = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        apiTheMovieDB
            .fetchMoviesByActors(id)
            .then(movies => {
                setMovies(movies);
                if (movies.length === 0) {
                    toast.error("sorry, that's all the actors we could find");
                }
            })
            .catch(error => {
                setError(error)
            })
            .finally(setLoading(false));
    }, [id]);

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <>
            <Container>
                <BtnBackWrapper>
                    <Link to={'/movie/actors/'}>
                        <BackDown />
                    </Link>
                </BtnBackWrapper>
                <ActorsMoviesTitle>Actors info and movies</ActorsMoviesTitle>
                <Link to={`/actors/movies/${id}/actors-info`} state={location.state}>
                    <ActorsMoreInfo>
                        See more information about the actor...
                    </ActorsMoreInfo>
                </Link>
                <Suspense>
                    <Outlet />
                </Suspense>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <MoviesList movies={movies} />
                )}
            </Container>
        </>
    );
};

export default ActorsMoviesPage;