import { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './TrendingMovies/MovieBox';
import './TrendingMovies/MovieBox.css';
import Navbar from './Navbar/Navbar';
import TopRatedMovies from './TopRatedMovies/TopRatedMovies';
import MovieSearch from './MovieSearch/MovieSearch';
import Contact  from './Contact/Contact';
import Overview from './Overview/Overview';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=2eaa025dc1976f015c39bf51fcd6130d";
const API_TOP_RATED = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=2eaa025dc1976f015c39bf51fcd6130d";

function App() {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(error => {
        console.error("Error fetching popular movies:", error);
      });

    fetch(API_TOP_RATED)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setTopRatedMovies(data.results);
      })
      .catch(error => {
        console.error("Error fetching top-rated movies:", error);
      });
    

  }, []);

 
  return (
    <>
      <Navbar />
      <MovieSearch />
      <div className='trending_movies'>
        <h1>Trending Movies</h1>
      </div>
      <div id='trending_movies_container_'>
        {movies.map((movieReq, index) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>

      
    
     <div className='trending_movies'>
        <h1>Top Rated Movies</h1>
      </div>
     <div id='trending_movies_container_' >
        {topRatedMovies.map((movieReq, index) => (
          <TopRatedMovies key={movieReq.id} {...movieReq} />
        ))}
     </div>
     <Contact />
        </>
  );
}

export default App;