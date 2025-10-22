import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { searchMovies, getFavMovies } from '../api.js';
import './MovieCard.css'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const loadFavMovie = async () => {
            console.log("1. Start - isLoading should be true");
            //setIsLoading(true);
            try {
                console.log("2. API call started");
                const favMovies = await getFavMovies();
                console.log("3. API call finished");
                setMovies(favMovies);
                //setIsLoading(false)
            } catch (err) {
                console.log("4. Error:", err);
                setErrorMessage("Failed to laod movies...");
            } finally {
                console.log("5. Finally block - setting loading false");
                setIsLoading(false);
                console.log("6. isLoading set to false");
            }
        }
        loadFavMovie();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (isLoading) return
        setIsLoading(true);
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult)
            setErrorMessage(null)
        } catch (err) {
            setErrorMessage("Failed to search movie....")
        } finally {
            setIsLoading(false)
        }


    }
    const inputCahngeHandle = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <>

            <div className='movie-data-body'>
                <form className='form-search' onSubmit={handleSearch}>
                    <label>
                        <input
                            type='text'
                            placeholder='type movie name here'
                            className='search-input'
                            value={searchQuery}
                            onChange={inputCahngeHandle}
                        >
                        </input>
                        <button type='submit' className='search-btn'>Search</button>
                    </label>
                </form>
                <div className="movie-data">
                    {isLoading ? <p className='loading-message'>Loading data.....</p> : errorMessage ? <p className='failed-message'>There is some error</p> :
                        movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        </>
    )
}

export default Home