import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { getMovies } from '../../features/movieSlice';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(getMovies(searchTerm));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
