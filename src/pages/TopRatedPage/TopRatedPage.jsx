import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import apiTheMovieDB from "../../services/kinoApi";
import Container from "../../components/Container/Container";
import MoviesList from "../../components/MoviesList/MoviesList";
import BackDown from "../../components/BackDown/BackDown";
import { TitleTopRating, CardsLoader, BtnWrapperTop } from './TopRatedPage.styled';
import css from '../ActorsPage/ActorsPage.module.css';

const TopRatedPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        apiTheMovieDB
        .fetchMoviesByRaiting(currentPage)
        .then(({ results, total_pages }) => {
            setMovies(results);
            setTotalPage(Math.min(total_pages, 500));
            if(results.length === 0) {
                toast.error("sorry, that's all the actors we could find");
            }
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => setLoading(false));
    }, [currentPage]);

    if(error) {
        return <p>{error.message}</p>
    }

    const handlePageChange = ({ selected }) => {
        if(selected + 1 > totalPage) {
            return;
        }
        setCurrentPage(selected + 1);
    }

    return ( 
        <>
            <Container>
                <BtnWrapperTop>
                    <Link to={backLink}>
                        <BackDown />
                    </Link>
                </BtnWrapperTop>
                <TitleTopRating>Top rating movies</TitleTopRating>
                {loading ? (
                    <CardsLoader size={50} />
                ) : (
                    <MoviesList movies={movies} />
                )}
                <ReactPaginate
                    pageCount={totalPage}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName={css.pagination}
                    pageClassName={css.page}
                    activeClassName={css.active}
                    previousClassName={css.previous}
                    nextClassName={css.next}
                    disabledClassName={css.disabled}
                    breakClassName={css.break}
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                />
            </Container>
        </>
    );
};

export default TopRatedPage;