import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ query }) => {
  const imageData = query;
  return imageData.map(image => (
    <li key={image.id} className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.largeImageURL}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  ));
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  query: PropTypes.arrayOf(PropTypes.object),
};
