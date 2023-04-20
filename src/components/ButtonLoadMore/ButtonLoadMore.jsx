import PropTypes from 'prop-types';
import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ hendleIncrement }) => {
  return (
    <BtnLoadMore type="button" onClick={() => hendleIncrement()}>
      Load More
    </BtnLoadMore>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  handleIncrement: PropTypes.func,
};