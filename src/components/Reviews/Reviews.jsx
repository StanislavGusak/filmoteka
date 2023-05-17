import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import moment from 'moment';
import { toast } from "react-toastify";
import authSelector from '../../redux/auth/auth-selector';
import apiTheMovieDB from "../../services/kinoApi";
import Container from "../Container/Container";
import CommentForm from '../ComentForm/ComentForm';
import { LanguageContext } from "../LanguageContext/LanguageContext";
import {
    ReviewAndCommentWrapper,
    Author,
    Content,
    ReviewList,
    ReviewListItem,
    InfoDiscription,
    CardsLoader,
    StyleFaTrashAlt,
    CommentAuthorName,
    CommentAuthorText,
    AuthorWrapper,
    SpanAuthor,
    CommentFormList,
    CommentFormItem,
    DateInfo,
  } from './Reviews.styled';

const Review = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const token = useSelector(authSelector.selectToken);
    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        apiTheMovieDB
            .fetchMovieReviews(movieId, selectedLanguage.iso_639_1)
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
            .finally(setIsLoading(false));
    }, [movieId, selectedLanguage]);

    useEffect(() => {
        axios
            .get('https://connections-api.herokuapp.com/contacts')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <CardsLoader size={30} />;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    const handleSubmit = data => {
        const { name, number } = data;

        if (!name || !number) {
            toast.error('Please fill in all fields!');
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const requestBody = {
            name: name,
            number: number,
        };
        axios
            .post(
                'https://connections-api.herokuapp.com/contacts',
                requestBody,
                config
            )
            .then(response => {
                setComments([...comments, response.data]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDeleteComment = id => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .delete(`https://connections-api.herokuapp.com/contacts/${id}`, config)
            .then(response => {
                setComments(comments.filter(comment => comment.id !== id));
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <>
            <Container>
                <CommentForm onSubmit={handleSubmit} />
                <ReviewAndCommentWrapper>
                    <CommentFormList>
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <CommentFormItem key={comment.id}>
                                    <StyleFaTrashAlt
                                        onClick={() => handleDeleteComment(comment.id)}
                                        size={20}
                                        color="red"
                                    />
                                    <AuthorWrapper>
                                        <SpanAuthor>Author:</SpanAuthor>
                                        <CommentAuthorName>{comment.name}</CommentAuthorName>
                                    </AuthorWrapper>
                                    <CommentAuthorText>{comment.number}</CommentAuthorText>
                                    <DateInfo>
                                        {moment(comment.created_at).format(
                                            'MMMM Do YYYY, h:mm:ss a'
                                        )}
                                    </DateInfo>
                                </CommentFormItem>
                            ))
                        ) : (
                            <InfoDiscription>No comments found</InfoDiscription>
                        )}
                    </CommentFormList>
                    <ReviewList>
                        {reviews && reviews.length > 0 ? (
                            reviews.map(({ author, content, id }) => (
                                <ReviewListItem key={id}>
                                    <Author> {author}</Author>
                                    <Content>{content}</Content>
                                </ReviewListItem>
                            ))
                        ) : (
                            <InfoDiscription>No review members found</InfoDiscription>
                        )}
                    </ReviewList>
                </ReviewAndCommentWrapper>
            </Container>
        </>
    );
}
export default Review;