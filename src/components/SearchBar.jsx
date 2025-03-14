import React, { useState } from 'react';
//import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Sök plats..."
        className="search-input"
      />
      <button type="submit" className="search-button">Sök</button>
    </form>
  );
};

export default SearchBar;
