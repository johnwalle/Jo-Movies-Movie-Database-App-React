import {useState,useEffect} from 'react'
import Box from '../Box.js'
import '../Component.css'

function Spopular() {

  const API_ONTV_SHOWS= 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=2eaa025dc1976f015c39bf51fcd6130d'
  const [popularSeries,setPopularSeries] = useState([]);


  useEffect(() => {
    const fetchPopularSeries = async () => {
      try {
        const response = await fetch(API_ONTV_SHOWS);
        const data = await response.json();
        console.log("the tv shows are successfully fetched")
        console.log(data);
        setPopularSeries(data.results);
      } catch (error) {
        console.error("Error fetching ontv shows:", error);
      }
    };
  
    fetchPopularSeries();
  }, []);


  return (
<>
 <div id='top_container'>
    <div className='Popular_movies_heading'>
        <h1>Popular TV hows</h1>
      </div>
      <div id='popular_movies_container'>
         {popularSeries.map((movieReq, index) => (
          <Box key={movieReq.id} {...movieReq} />
        ))}  
      </div>
 </div>

    </>
  )
}

export default Spopular
