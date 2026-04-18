import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;