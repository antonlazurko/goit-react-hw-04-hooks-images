import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageError.module.css';
import sadImage from './jW.gif';
export default function ImageError({ error, searchQuery }) {
  return error ? (
    <div>{error.message}</div>
  ) : (
    <div className={styles.error}>
      Нет картинок по запросу{' '}
      <span className={styles.queryName}>{searchQuery}</span>
      <img src={sadImage} alt="" className={styles.ImageError} />
    </div>
  );
}
ImageError.propTypes = {
  error: PropTypes.object,
  searchQuery: PropTypes.string,
};
