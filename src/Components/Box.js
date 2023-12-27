import { useNavigate } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Box = ({title,poster_path,vote_average,release_date,original_name,overview,backdrop_path}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/overview", {
      state: {
        
        title,
        poster_path,
        vote_average,
        release_date,
        overview,
        backdrop_path
      }
    });
  };

  return (
    <div id='movie_container'>
       <div className='movie_contents'>
          <img onClick={clickHandler} id='movie_posters' src={API_IMG+poster_path} />
          <p className='vote_average'> ⭐️: {vote_average}</p>  
          <h1 className='movie_titles'>{title}</h1> 
          <h1 className='movie_titles'>{original_name}</h1> 
          <p className='release-date'>{release_date}</p>
        {/* <p>{overview}</p> */}
       </div>
    </div>
  ) 
}

export default Box
