import React from 'react';
import { useAppSelector } from '../hooks';

const MovieList: React.FC = () => {
  const { movies, loading, error } = useAppSelector((state) => state.movies);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
