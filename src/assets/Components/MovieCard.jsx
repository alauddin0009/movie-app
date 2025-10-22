import React, { useState } from 'react'
import './MovieCard.css'
import { useMovieContex } from '../Contexts/MovieContext';

export const MovieCard = ({ movie }) => {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContex()
    const favorite = isFavorite(movie.id);
    const onFavBtnClick = (e) => {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return (

        <div className="movie-poster">
            <div key={movie.id} className='poster-container'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="fav-btn-overlay">
                    <button
                        onClick={onFavBtnClick}
                    >
                        <div className={favorite ? "fav-btn-active" : "fav-btn-notactive"}>&hearts;</div>
                    </button>
                </div>
                <div className="movie-details">
                    <p>Title: {movie.title}</p>
                    <p>Release Year: {movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </div>
    )
}
