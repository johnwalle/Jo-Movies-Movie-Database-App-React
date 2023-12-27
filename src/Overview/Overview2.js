import './Overview.css'
import { useLocation } from 'react-router-dom';

function Overview() {
  const location = useLocation();
  const { original_name,profile_path,known_for} = location.state || {};
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  
  if (!location.state) {
    return <div>No data available</div>;
  }

  return (
    <>
            <div id='overlay'>      
             </div>       
  <div id='overview_container'>
            <div className='poster_image_container'>
               <img className='poster_image' src={API_IMG+profile_path} alt={original_name} />  
            </div>
    <div>  
        <h1 className='overview_title_name'>{original_name}</h1>
    </div>
   
<div>
          <ul>
          <h3>Known for:</h3>

        {known_for.map((item) => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
      </div>
    </div>

    </>
  );
}

export default Overview;