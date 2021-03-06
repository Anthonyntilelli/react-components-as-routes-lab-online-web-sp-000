import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              { movie.genres.map((genre) => <p>{genre}</p>)}
          </div>
      ))}
    </div>
  );
};

export default Movies;
