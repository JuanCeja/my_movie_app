import React, { useEffect } from 'react';

import './App.css';
import SearchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com/?apikey=7bceea39`;

const App = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(`${API_URL}&t=${title}`);
        console.log(data);
    }

    useEffect(() => {
        searchMovies('war');
    }, [])

    return (<div className='app'>
        <h1>Juan's Movie Application</h1>

        <div className='search'>
            <input
            placeholder='Search for movies'
            value="war"
            onChange = {() => {}}
            />
            <img 
            src={SearchIcon}
            alt="search"
            />
        </div>
        </div>
    );
}

export default App;