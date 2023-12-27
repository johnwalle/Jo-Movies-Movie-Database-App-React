import {useState,useEffect} from 'react'
import Box from '../Box.js'
import '../Component.css'

function Ontv() {

  const API_ONTV_SHOWS= 'https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=2eaa025dc1976f015c39bf51fcd6130d'
  const [ontvSeries,setOntvSeries] = useState([]);


  useEffect(() => {
    const fetchOntvSeries = async () => {
      try {
        const response = await fetch(API_ONTV_SHOWS);
        const data = await response.json();
        console.log("the tv shows are successfully fetched")
        console.log(data);
        setOntvSeries(data.results);
      } catch (error) {
        console.error("Error fetching ontv shows:", error);
      }
    };
  
    fetchOntvSeries();
  }, []);


  return (
<>
 <div id='top_container'>
    <div className='Popular_movies_heading'>
        <h1>Currently Airing TV Shows</h1>
      </div>
      <div id='popular_movies_container'>
         {ontvSeries.map((movieReq, index) => (
          <Box key={movieReq.id} {...movieReq} />
        ))}  
      </div>
 </div>

    </>
  )
}

export default Ontv
