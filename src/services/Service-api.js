import axios from 'axios';
import PropTypes from 'prop-types';

function fetchImage(query, currentPage) {
  return axios
    .get(
      `https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=${query}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response);
}
export default fetchImage;
fetchImage.propTypes = {
  query: PropTypes.string,
  searchQuery: PropTypes.string,
};
