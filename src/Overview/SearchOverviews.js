import React from 'react';
import { useLocation } from 'react-router-dom';
import './Overview.css';

function SearchOverviews() {
  const location = useLocation();
  const { title,original_name, poster_path, vote_average, release_date, overview, backdrop_path } = location.state || {};
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  if (!location.state) {
    return <div>No data available</div>;
  }

  return (
    <>
            <div id='overlay'>      
             </div>       
                <img className='backdrop_image' src={API_IMG+backdrop_path} alt={original_name} />
  <div id='overview_container'>
            <div className='poster_image_container'>
               <img className='poster_image' src={API_IMG+poster_path} alt={original_name} />
            </div>
    <div>  
         <h1 className='overview_title_name'>{title}</h1>
        <h1 className='overview_title_name'>{original_name}</h1>
        <p className='vote_average'>⭐️: {vote_average}</p>
        <p className='release_date'>Release Date: {release_date}</p>
        <h1 className='overview_text'>Overview</h1>
        <p className='overview_description'>{overview}</p>
    </div>
  </div>
    </>
  );
}

export default SearchOverviews;