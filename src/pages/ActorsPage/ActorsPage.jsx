import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { FcSearch } from 'react-icons/fc'
import { animateScroll as scroll } from 'react-scroll';
import Container from "../../components/Container/Container";
import BackDown from "../../components/BackDown/BackDown";
import apiTheMovieDB from "../../services/kinoApi";
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import Loader from '../../components/Loader/Loader';
import css from './ActorsPage.module.css';
import {
    SearchWrapper,
    Search,
    ActorList,
    ActorListItem,
    ActorsName,
    ActorsRating,
    ActorsDepartment,
    StyleDebounceInput
} from "./ActorsPage.styled";

const ActorsPage = () => {
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredActors, setFilteredActors] = useState([]);
    const { selectedLanguage } = useContext(LanguageContext);

    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        const fetchActors = async (page, searchQuery) => {
            try {
                const { results, total_pages } = await apiTheMovieDB.fetchActors(
                    page,
                    searchQuery,
                    selectedLanguage.iso_639_1
                );
                if (results.length === 0) {
                    toast.error("sorry, that's all the actors we could find");
                }
                setActors(results);
                setTotalPages(total_pages);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchActors(currentPage, searchQuery)
    }, [currentPage, searchQuery, selectedLanguage]);

    useEffect(() => {
        const filtered = actors.filter(actor =>
            actor.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredActors(filtered);
    }, [actors, searchQuery]);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuad',
        });
    };

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <Container>
            <SearchWrapper>
                <Search>
                    <StyleDebounceInput
                        type="text"
                        placeholder="Search actors..."
                        value={searchQuery}
                        minLength={2}
                        debounceTimeout={500}
                        onChange={handleSearchChange}
                    />
                    <FcSearch className={css.icon} />
                </Search>
            </SearchWrapper>
            <Link to={backLink}>
                <BackDown />
            </Link>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <ActorList>
                        {filteredActors.map(
                            (
                                { profile_path, name, known_for_department, popularity, id },
                                index
                            ) => (
                                <Link to={`/actors/movies/${id}`} key={id}>
                                    <ActorListItem key={`${id}-${index}`}>
                                        <img
                                            src={
                                                profile_path
                                                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                                    : 'https://dummyimage.com/200x300/fff/aaa'
                                            }
                                            alt={name}
                                            width={200}
                                        />
                                        <ActorsName>{name}</ActorsName>
                                        <ActorsDepartment>{known_for_department}</ActorsDepartment>
                                        <ActorsRating>{(popularity / 5).toFixed(0)}%</ActorsRating>
                                    </ActorListItem>
                                </Link>
                            )
                        )}
                    </ActorList>
                    <ReactPaginate
                        pageCount={totalPages}
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
                </>
            )}
        </Container>
    );
};

export default ActorsPage;