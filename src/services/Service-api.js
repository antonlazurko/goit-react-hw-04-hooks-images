import axios from 'axios';
import PropTypes from 'prop-types';

//18968535-a98ecca7bd1b0403c78b07ef3
function fetchImage(query, currenPage) {
  return axios
    .get(
      `https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=${query}&page=${currenPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response);
}
export default fetchImage;
fetchImage.propTypes = {
  query: PropTypes.string,
  searchQuery: PropTypes.string,
};
