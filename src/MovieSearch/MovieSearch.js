import './MovieSearch.css';
import movie_image from '../Assets/movie_image.jpg';
import React, { useState } from 'react';
import Box from '../Components/Box';
import { useNavigate } from 'react-router-dom';

const API_KEY = '2eaa025dc1976f015c39bf51fcd6130d';

function MovieSearch() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log('searching');

      console.log(data);
      setMovies(data.results);
      navigate('/search-results', { state: { movies: data.results } });
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="image__container">
        <img src={movie_image} alt="movie image" />
      </div>
      <div className="welcome-message">
        <h1>Welcome to Jo-Movies!</h1>
        <p>Your ultimate destination for the latest and greatest movies.</p>
      </div>
      <form onSubmit={searchMovie} className="search-form">
        <input
          type="text"
          value={query}
          onChange={changeHandler}
          className="search-input"
          placeholder="Search for a movie ..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ul>
        {movies.map((movie) => (
          <Box key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;