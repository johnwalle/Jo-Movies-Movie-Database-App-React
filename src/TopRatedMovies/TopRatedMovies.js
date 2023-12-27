import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopRatedMovies({ original_name, poster_path, vote_average, first_air_date, overview ,backdrop_path
}) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/overview", {
      state: {
        original_name,
        poster_path,
        vote_average,
        first_air_date,
        overview,
        backdrop_path
      }
    });
  };

  return (
    <div id='movie_container'>
      <div className='movie_contents'>
        <img
          id='movie_posters'
          onClick={clickHandler}
          src={API_IMG + poster_path}
          alt={original_name}
        />
        <p className='vote_average'>⭐️: {vote_average}</p>
        <h1 className='movie_titles'>{original_name}</h1>
        <p className='release-date'>{first_air_date}</p>
      </div>
    </div>
  );
}

export default TopRatedMovies;