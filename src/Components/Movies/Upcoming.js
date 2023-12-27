import {useState,useEffect} from 'react'
import Box from '../Box.js'
import '../Component.css'

function Upcoming() {

  const API_UPCOMING_MOVIES= 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=2eaa025dc1976f015c39bf51fcd6130d'
  const [upcomingMovies,setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(API_UPCOMING_MOVIES);
        const data = await response.json();
        console.log(data);
        setUpcomingMovies(data.results);
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
        <h1>Upcoming Movies</h1>
      </div>
      <div id='popular_movies_container'>
         {upcomingMovies.map((movieReq, index) => (
          <Box key={movieReq.id} {...movieReq} />
        ))}  
      </div>
 </div>

    </>
  )
}

export default Upcoming
