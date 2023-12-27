import { useState, useEffect } from 'react';
import PopularBox from '../PopularBox.js';
import '../Component.css';

function Populars() {
  const API_POP_PEOPLE =
    'https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=2eaa025dc1976f015c39bf51fcd6130d';
  const [popPeople, setPopPeople] = useState([]);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(API_POP_PEOPLE);
        const data = await response.json();
        
        console.log('Popular people fetched successfully');
        console.log(data);
        setPopPeople(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularPeople();
  }, []);

  return (
    <>
      <div id='top_container'>
        <div className='Popular_movies_heading'>
          <h1>Popular People</h1>
        </div>
        <div id='popular_movies_container'>
          {popPeople.map((person, index) => (
            <PopularBox key={person.id} {...person} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Populars;