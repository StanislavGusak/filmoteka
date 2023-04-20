import {
    CardWrapper,
    ImgWrapper,
    MoviesImg,
    CardTitle,
    RatingStarsContainer,
    GoldStar,
    GrayStar,
    RatingText,
    RatingNumber,
    RatingBlock,
    MoviesYear,
} from './MoviesItem.styled';

const MoviesItem = ({ poster_path, title, vote_average, release_date }) => {
    const persentRating = vote_average * 10; // convert 0-10 rating to percentage
    const goldStars = Math.floor(persentRating / 10); //number of gold star
    // eslint-disable-next-line no-unused-vars
    const greyStars = 10 - goldStars; // number of grey stars

    // create an array of stars with the appropriate color
    const ratingStars = Array.from({ length: 10 }, (_, i) => {
        if (i < goldStars) {
            return <GoldStar key={`star-${i}`}>&#9733;</GoldStar>;
        } else {
            return <GrayStar key={`star-${i}`}>&#9733;</GrayStar>
        }
    });

    const getRatingColor = vote_average => {
        if (vote_average <= 4) {
            return 'red';
        } else if (vote_average < 7) {
            return 'yellow';
        } else {
            return 'green';
        }
    };

    const ratingColor = getRatingColor(vote_average);
    const raitingClassName = `rating-${ratingColor}`;

    return (
        <>
            <CardWrapper>
                <ImgWrapper>
                    <MoviesImg
                        src={
                            poster_path
                                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                : 'https://via.placeholder.com/300x400'
                        }
                        alt={title}
                        width={300}
                    >
                    </MoviesImg>
                </ImgWrapper>
                <CardTitle>{title ? title : 'Movie without a title'}</CardTitle>
                <RatingStarsContainer>
                    <RatingText>{vote_average ? ratingStars : 'N/A'}</RatingText>
                    <RatingBlock className={raitingClassName}>
                        <RatingNumber>
                            {vote_average ? vote_average.toFixed(1) : 'N/A'}
                        </RatingNumber>
                    </RatingBlock>
                    <MoviesYear>
                        {release_date ? release_date.slice(0, 4) : 'N/A'}
                    </MoviesYear>
                </RatingStarsContainer>
            </CardWrapper>
        </>
    )
};

export default MoviesItem;