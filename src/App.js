import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=a5ac6dbd';

const movie1 = {
    "Title": "Fight Club",
    "Year": "1999",
    "imdbID": "tt0137523",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('fight club');
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies" value="Fight club" onChange={() => {}} />
                <img src={SearchIcon} alt="search" onClick={() => {}} />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                )
                : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;