import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=a5ac6dbd'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() =>{
        searchMovies('fight club');
    }, []);

    return(
        <>
            <h1>Hello, World!</h1>
        </>
    );
}

export default App;