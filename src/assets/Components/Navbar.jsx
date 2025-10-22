import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-site-logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="nav-menu">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/fav-movie">Faorite Movies</Link>
            </div>
        </div>
    )
}

export default Navbar