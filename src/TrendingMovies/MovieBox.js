import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Overview from '../Overview/Overview';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview,backdrop_path }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/overview", {
      state: {
        original_name: title,
        poster_path,
        vote_average,
        first_air_date: release_date,
        overview,
        backdrop_path
      },
    });
  };

  return (
    <div id='movie_container'>
      <div className='movie_contents'>
        <img onClick={clickHandler} id='movie_posters' src={API_IMG + poster_path} alt={title} />
        <p className='vote_average'>⭐️: {vote_average}</p>
        <h1 className='movie_titles'>{title}</h1>
        <p className='release-date'>{release_date}</p>
      </div>
    </div>
  );
};

export default MovieBox;