import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Popular from './Components/Movies/Popular'
import TopRated from './Components/Movies/TopRated'
import Upcoming from './Components/Movies/Upcoming'
import Ontv from './Components/Series/Ontv'
import Spopular from './Components/Series/Spopular'
import StopRated from './Components/Series/StopRated'
import Populars from './Components/People/Populars'
import Overview  from './Overview/Overview';
import Overview2 from './Overview/Overview2';
import SearchResults from './MovieSearch/SearchResults'
import SearchOverviews from './Overview/SearchOverviews'
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/popular_movies" element={<Popular />} />
  <Route path="/toprated_movies" element={<TopRated />} />
  <Route path="/upcoming_movies" element={<Upcoming />} />
  <Route path="/ontv_series" element={<Ontv />} />
  <Route path="/popular_series" element={<Spopular />} />
  <Route path="/toprated_series" element={<StopRated />} />
  <Route path="/popular_people" element={<Populars />} />
  <Route path="/overview" element={<Overview />} />
  <Route path="/people_overview" element={<Overview2 />} />
  <Route path="/search-results" element={<SearchResults />} />
  <Route path="/search-overviews" element={<SearchOverviews/>} />







  </Routes>
</Router>
);
