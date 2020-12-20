import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.Button}>
      Загрузить еще
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
