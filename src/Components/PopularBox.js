import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Box = ({ original_name, profile_path, known_for }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/people_overview", {
      state: {
        original_name,
        profile_path,
        known_for
      }
    });
  };

  return (
    <div id='movie_container'>
      <div className='movie_contents'>
        <img onClick={clickHandler} id='movie_posters' src={API_IMG + profile_path} />
        <h3 className='original_name'>{original_name}</h3>
        <p>Known for:</p>
        
      </div>
    </div>
  );
};

export default Box;