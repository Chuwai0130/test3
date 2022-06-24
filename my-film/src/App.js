import React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import './App.css';


const API_URL = 'http://www.omdbapi.com?apikey=99b53f61'

const App = () => {

  const searchMovies = async (title) => {
       const response = await fetch(`${API_URL}&s=${title}`);
       const data = await response.json();

       console.log(data.Search);
  }
  
    useEffect(() => {
      searchMovies('Batman');

   }, []);
    

    return (
      <div className='app'>
        <h1>MovieLand</h1>
        <div>
          <input 
           placeholder='Search for Movies'
           value='Batman'
           onClick={() => {}}
           />
           <img 
            src={SearchIcon}
            alt='search'
            onClick={() => {}}
            />
        </div>

      </div>
        
    );
}

export default App