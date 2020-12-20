import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Searchbar.module.css';
export default function Searchbar({ onFormSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const onQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('Type something to find.');
      return;
    }
    onFormSubmit(searchQuery.toLowerCase(), currentPage);
    setSearchQuery('');
    setCurrentPage(1);
  };
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={onSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onQueryChange}
        />
      </form>
    </header>
  );
}
// class Searchbar extends Component {
//   state = { searchQuery: '', currentPage: 1 };

//   onQueryChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       toast('Type something to find.');
//       return;
//     }
//     this.props.onSubmit(
//       this.state.searchQuery.toLowerCase(),
//       this.state.currentPage,
//     );
//     this.setState({ searchQuery: '', currentPage: 1 });
//   };
//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form onSubmit={this.onSubmit} className={styles.SearchForm}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={styles.SearchFormInput}
//             value={this.state.searchQuery}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.onQueryChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default Searchbar;
Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};
