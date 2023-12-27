import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const movies = location.state && location.state.movies ? location.state.movies : [];
  const navigate = useNavigate();

  const clickHandler = (movie) => {
    navigate('/search-overviews', {
      state: {
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
      },
    });
  };

  return (
    <div>
      <h1>Search Results:</h1>
      {movies.length > 0 ? (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
                <img
                  onClick={() => clickHandler(movie)}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
              <p className="vote-average">⭐️: {movie.vote_average}</p>
              <h2 className="movie-title">{movie.title}</h2>
              <p className="release-date">{movie.release_date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;