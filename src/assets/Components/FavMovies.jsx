import { useMovieContex } from '../Contexts/MovieContext'
import { MovieCard } from './MovieCard';

const FavMovies = () => {
  const { favorite } = useMovieContex() // also fixed the typo

  if (favorite && favorite.length > 0) {
    return (
      <>
      <div className="movie-data">
        {favorite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
      </>
    );
  } else {
    return <div className='failed-message'>There are no favorite movies.</div>;
  }
};

export default FavMovies