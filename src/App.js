import React, { useEffect, useState } from 'react';

import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com/?apikey=7bceea39`;

const App = () => {

    // this is our state variables and set state functions
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // searchMovies function will make the call to the API using title as the parameter
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // we console.log our data to see how its coming back and whats coming back
        console.log(data);

        // we use our setMovies state function to set our movies into an array of movies(objects) that our searchMovies is bringing back from the API
        setMovies(data.Search);
    }

    // use effect will call our searchMovies function on render
    useEffect(() => {
        searchMovies('war');
    }, [])

    return (
        <div className='app'>
            <h1>Juan's Movie Application</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm) }
                />
            </div>
            {
                movies.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                // we map threw our array of movies and pass each movie(object) as props to our MovieCard Component
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        // if we have no movies to display we return this
                        <div className='empty'>
                            <h2>No movies found.</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;