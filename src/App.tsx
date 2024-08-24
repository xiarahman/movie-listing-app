import React from 'react';
import './App.css';
import SearchBar from '../src/app/components/SearchBar';
import MovieList from '../src/app/components/MovieList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Movie Listing</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
