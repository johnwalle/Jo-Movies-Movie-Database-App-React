import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setIsOpen2(false);
  };

  const clickHandler1 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen1(!isOpen1);
  };

  const clickHandler2 = () => {
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
  };
  const delClickHandler = () => {
    setMenuOpen(false) 
  }
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen1(false);

  };


  return (
    <div className='navbar__container'>
      <div className='navbar__leftcontents'>
        <h3>Jo-Movies</h3>

        
        <div className='navbar__links'>
          <li>
            <Link
              onClick={clickHandler}

              className='movie_type_links'
              to='/'
            >
              Movies
            </Link>
          </li>
          {isOpen && (
            <div  
           
            className='dropdown_container movie_dropdown_container'>
              <li>
                <Link  className='movie_type_links' to="/popular_movies">
                  Popular
                </Link>
              </li>
              <li>
                <Link className='movie_type_links' to='/upcoming_movies'>
                  Upcoming
                </Link>
              </li>
              <li>
                <Link className='movie_type_links' to='/toprated_movies'>
                  Top Rated
                </Link>
              </li>
            </div>
          )}
          <li>
            <Link
              onClick={clickHandler1}
              className='movie_type_links'
              to='/'
            >
              Series
            </Link>
          </li>
          {isOpen1 && (
            <div    
            className='dropdown_container series_dropdown_container'>
              <li>
                <Link className='movie_type_links' to='/popular_series'>
                  Popular
                </Link>
              </li>
              <li>
                <Link className='movie_type_links' to='/ontv_series'>
                  On TV
                </Link>
              </li>
              <li>
                <Link className='movie_type_links' to='/toprated_series'>
                  Top Rated
                </Link>
              </li>
            </div>
          )}
          <li>
            <Link
              onClick={clickHandler2}
              className='movie_type_links'
              to='/'
            >
              People
            </Link>
          </li>
          {isOpen2 && (
            <div 
            className='dropdown_container people_dropdown_container'>
              <li>
                <Link className='movie_type_links' to='/popular_people'>
                  Popular People
                </Link>
              </li>
            </div>
          )}
        </div>
      </div>
      <div className='navbar__rightcontents'>
        <div className='menu-bar-container'>
          <button onClick={toggleMenu} className='menu-bar-icon'>
            {menuOpen ? (
              <FaTimes className='menu_icon' />
            ) : (
              <FaBars className='menu_icon' />
            )}
          </button>
          {menuOpen && (
            <div
              className={`menu-items-container ${menuOpen ? 'menu-open' : ''}`}
            >
              <li>
                <Link onClick={clickHandler}  className='movie_type_links' to='/'>
                  Movies
                </Link>
              </li>
              {isOpen && (
            <div  
           
            className='dropd_container movie_menu_dropdown_container'>
              <li>
                <Link onClick={delClickHandler}  className='movie_type_links' to='/popular_movies'>
                  Popular
                </Link>
              </li>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/upcoming_movies'>
                  Upcoming
                </Link>
              </li>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/toprated_movies'>
                  Top Rated
                </Link>
              </li>
            </div>
          )}
              <li>
                <Link onClick={clickHandler1} className='movie_type_links' to='/'>
                  Series
                </Link>
              </li>
              {isOpen1 && (
            <div    
            className='dropd_container series_menu_dropdown_container'>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/popular_series'>
                  Popular
                </Link>
              </li>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/pntv_series'>
                  On TV
                </Link>
              </li>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/toprated_series'>
                  Top Rated
                </Link>
              </li>
            </div>
          )}
              <li>
                <Link onClick={clickHandler2} className='movie_type_links' to='/'>
                  People
                </Link>
              </li>
              {isOpen2 && (
            <div 
            className='dropd_container people_menu_dropdown_container'>
              <li>
                <Link onClick={delClickHandler} className='movie_type_links' to='/popular_people'>
                  Popular People
                </Link>
              </li>
            </div>
          )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;