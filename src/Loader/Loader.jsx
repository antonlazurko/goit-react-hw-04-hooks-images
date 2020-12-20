import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loader.module.css';
export default function Loader({ searchQuery }) {
  return (
    <div className={styles.LoaderContainer}>
      <p>
        Подождите, идет загрузка изображений по запросу{' '}
        <span className={styles.searchQuery}>{searchQuery}</span>
      </p>
      <div className={styles.hourglass}></div>
    </div>
  );
}
Loader.propTypes = {
  searchQuery: PropTypes.string,
};
