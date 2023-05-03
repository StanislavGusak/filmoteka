import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiTheMovieDB from "../../services/kinoApi";
import Container from "../Container/Container";
import { Author, Content } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiTheMovieDB
        .fetchMovieReviews(movieId)
        .then(data => {
            setReviews(data);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        })
        .finally(setIsLoading(false));

    }, [movieId]);

    if(isLoading) {
        return <p>Loading...</p>;
    } if(error) {
        return <p>{error.message}</p>;
    }

    return (
        <>
            <Container>
                <div className='css.reviewList'>
                    {reviews && reviews.length > 0 ? (
                         reviews.map(({author, content, id}) => (
                            <div className='css.reviewListItem' key={id}>
                                <Author>Author: {author}</Author>
                                <Content>Content: {content}</Content>
                            </div>
                        ))
                    ) : (
                        <p>No reviews members found</p>
                    )}
                </div>
            </Container>
        </>
    )
};

export default Reviews;