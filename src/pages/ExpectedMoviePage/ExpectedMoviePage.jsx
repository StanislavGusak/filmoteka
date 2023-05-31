import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from 'react-paginate';
import apiTheMovieDB from "../../services/kinoApi";
import { CardsLoader, ExpectedTitle, BtnBackExpectedWrapper } from "./ExpectedMoviePage.styled";
import Container from "../../components/Container/Container";
import BackDown from "../../components/BackDown/BackDown";
import MoviesList from "../../components/MoviesList/MoviesList";
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import css from '../ActorsPage/ActorsPage.module.css';

const ExpectedMoviePage =() => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';
    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        apiTheMovieDB
        .fetchWaitingForMovies(currentPage, selectedLanguage.iso_639_1)
        .then(({results, total_pages}) => {
            setMovies(results);
            setTotalPage(Math.min(total_pages, 500));
            if(results.length === 0) {
                toast.error("sorry, that's all the actors we could find");
            }
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => setLoading(false))
    }, [currentPage, selectedLanguage.iso_639_1]);

    if(error) {
        return <p>{error.message}</p>
    }

    const handlePageChange = ({ selected }) => {
        if (selected + 1 > totalPage) {
          return;
        }
        setCurrentPage(selected + 1);
    };

    return (
        <>
            <Container>
                <ExpectedTitle>Expected Movies</ExpectedTitle>
                <BtnBackExpectedWrapper>
                    <Link to={backLink}>
                        <BackDown />
                    </Link>
                </BtnBackExpectedWrapper>
                {loading ? (
                    <CardsLoader size={50} />
                ) : (
                    <>
                        <MoviesList movies={movies} />
                    </>
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

export default ExpectedMoviePage;