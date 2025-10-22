import Home from './assets/Components/Home'
import { Route, Routes } from 'react-router-dom'
import FavMovies from './assets/Components/FavMovies'
import Navbar from './assets/Components/Navbar'
import { MovieProvider } from './assets/Contexts/MovieContext'

const App = () => {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/fav-movie' element={<FavMovies />} />
          </Routes>
        </div>
      </MovieProvider>
    </>
  )
}

export default App