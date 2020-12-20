import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';

import styles from './App.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };
  onFormSubmit = searchQuery => {
    this.setState({ searchQuery, currentPage: 1 });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          currentPage={this.state.currentPage}
        />

        <ToastContainer autoClose={3000} position="top-center" />
      </div>
    );
  }
}

export default App;
App.propTypes = {
  searchQuery: PropTypes.string,
};
