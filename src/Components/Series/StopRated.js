import {useState,useEffect} from 'react'
import Box from '../Box.js'
import '../Component.css'

function StopRated() {

  const API_TOPRATED_TV_SHOWS='https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=2eaa025dc1976f015c39bf51fcd6130d'
  const [topRatedSeries,setTopRatedSeries] = useState([]);


  useEffect(() => {
    const fetchTopRatedSeries = async () => {
      try {
        const response = await fetch(API_TOPRATED_TV_SHOWS);
        const data = await response.json();
        console.log("the tv shows are successfully fetched")
        console.log(data);
        setTopRatedSeries(data.results);
      } catch (error) {
        console.error("Error fetching ontv shows:", error);
      }
    };
  
    fetchTopRatedSeries();
  }, []);


  return (
<>
 <div id='top_container'>
    <div className='Popular_movies_heading'>
        <h1>Top Rated TV Shows</h1>
      </div>
      <div id='popular_movies_container'>
         {topRatedSeries.map((movieReq, index) => (
          <Box key={movieReq.id} {...movieReq} />
        ))}  
      </div>
 </div>

    </>
  )
}

export default StopRated
