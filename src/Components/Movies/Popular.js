import {useState,useEffect} from 'react'
import Box from '../Box.js'
import '../Component.css'

function Popular() {

  const API_POP_MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=2eaa025dc1976f015c39bf51fcd6130d';
  const [popMovies,setPopMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(API_POP_MOVIES_URL);
        const data = await response.json();
        console.log(data);
        setPopMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
  
    fetchPopularMovies();
  }, []);


  return (
<>
 <div id='top_container'>
    <div className='Popular_movies_heading'>
        <h1>Popular Movies</h1>
      </div>
      <div id='popular_movies_container'>
         {popMovies.map((movieReq, index) => (
          <Box key={movieReq.id} {...movieReq} />
        ))}  
      </div>
 </div>

    </>
  )
}

export default Popular
