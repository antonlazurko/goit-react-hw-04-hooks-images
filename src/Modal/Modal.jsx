import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
export default function Modal({ onClose, children }) {
  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
  });

  return (
    <div className={styles.Overlay} onClick={onBackdropClick}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
}
// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <div className={styles.Overlay} onClick={this.onBackdropClick}>
//         <div className={styles.Modal}>{this.props.children}</div>
//       </div>
//     );
//   }
// }
Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.object,
};
