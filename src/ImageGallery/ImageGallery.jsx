import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
import API from '../services/Service-api';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader';
import ImageError from '../ImageError';
import Modal from '../Modal';
import Button from '../Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const ImageGallery = ({ searchQuery, queryCurrentPage }) => {
  const [queryArr, setQueryArr] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const isFirstRender = useRef(true);
  const fetchImages = () => {
    API(searchQuery, currentPage)
      .then(query => {
        const images = query.data.hits;
        if (!images.length) {
          setQueryArr(queryArr);
          setStatus(Status.REJECTED);
        } else {
          setQueryArr([...queryArr, ...images]);
          setStatus(Status.RESOLVED);
          setCurrentPage(currentPage + 1);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          window.addEventListener('click', onGalleryItemClick);
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };
  const onGalleryItemClick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    setLargeImageURL(event.target.alt);
    toggleModal();
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setStatus(Status.PENDING);
    setQueryArr([]);
    setCurrentPage(queryCurrentPage);
    fetchImages();
  }, [searchQuery]);

  if (status === Status.IDLE) {
    return <div>Введите текст запроса.</div>;
  }

  if (status === Status.PENDING) {
    return (
      <div className={styles.Loader}>
        <Loader searchQuery={searchQuery} />
      </div>
    );
  }

  if (status === Status.REJECTED) {
    return <ImageError error={error} searchQuery={searchQuery} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem query={queryArr} />
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt="" className={styles.image} />
          </Modal>
        )}
        <Button onClick={fetchImages} />
      </ul>
    );
  }
};
// class ImageGallery extends Component {
//   state = {
//     query: [],
//     error: null,
//     status: Status.IDLE,
//     currentPage: 1,
//     showModal: false,
//     largeImageURL: '',
//   };

//   fetchImages = () => {
//     API(this.props.searchQuery, this.state.currentPage)
//       .then(query => {
//         const images = query.data.hits;
//         if (!images.length) {
//           this.setState({ query, status: Status.REJECTED });
//         } else {
//           this.setState(prevState => ({
//             query: [...prevState.query, ...images],
//             status: Status.RESOLVED,
//             currentPage: prevState.currentPage + 1,
//           }));
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//           });
//           window.addEventListener('click', this.onGalleryItemClick);
//         }
//       })
//       .catch(error => this.setState({ error, status: Status.REJECTED }));
//   };
//   onGalleryItemClick = event => {
//     if (event.target.nodeName !== 'IMG') {
//       return;
//     }
//     this.setState({ largeImageURL: event.target.alt });
//     this.toggleModal();
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   componentDidUpdate = (prevProps, prevState) => {
//     const prevQuery = prevProps.searchQuery;
//     const nextQuery = this.props.searchQuery;
//     if (prevQuery !== nextQuery) {
//       this.setState({
//         status: Status.PENDING,
//         query: [],
//         currentPage: this.props.queryCurrentPage,
//       });
//       this.fetchImages();
//     }
//   };
//   componentWillUnmount() {
//     window.removeEventListener('click', this.onGalleryItemClick);
//   }
//   render() {
//     const { query, error, status } = this.state;
//     const { searchQuery } = this.props;

//     if (status === Status.IDLE) {
//       return <div>Введите текст запроса.</div>;
//     }

//     if (status === Status.PENDING) {
//       return (
//         <div className={styles.Loader}>
//           <Loader searchQuery={searchQuery} />
//         </div>
//       );
//     }

//     if (status === Status.REJECTED) {
//       return <ImageError error={error} searchQuery={searchQuery} />;
//     }

//     if (status === Status.RESOLVED) {
//       return (
//         <ul className={styles.ImageGallery}>
//           <ImageGalleryItem query={query} />
//           {this.state.showModal && (
//             <Modal onClose={this.toggleModal}>
//               <img
//                 src={this.state.largeImageURL}
//                 alt=""
//                 className={styles.image}
//               />
//             </Modal>
//           )}
//           <Button onClick={this.fetchImages} />
//         </ul>
//       );
//     }
//   }
// }
export default ImageGallery;
ImageGallery.propTypes = {
  currentPage: PropTypes.number,
  searchQuery: PropTypes.string,
};
