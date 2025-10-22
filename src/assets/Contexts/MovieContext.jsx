import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the context
const MovieContext = createContext()
// 2. Create the provider component
export const MovieProvider = ({ children }) => {
    const [favorite, setFavorites] = useState(() => {
        const storFavs = localStorage.getItem("favorites");
        return storFavs ? JSON.parse(storFavs) : [];
    })
    useEffect(() => {
        const storFavs = localStorage.getItem("favorites")
        if (storFavs) setFavorites(JSON.parse(storFavs))
    }, [])
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorite))
    }, [favorite])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }
    const removeFromFavorites = (movie_id) => {
        setFavorites(pre => pre.filter(movie => movie.id !== movie_id))
    }
    const isFavorite = (movie_id) => {
        return favorite.some(movie => movie.id === movie_id)
    }

    return <MovieContext.Provider value={{ favorite, addToFavorites, removeFromFavorites, isFavorite }}>{children}</MovieContext.Provider>
}
// 3. Create a custom hook to use the context
export const useMovieContex = () => useContext(MovieContext)
