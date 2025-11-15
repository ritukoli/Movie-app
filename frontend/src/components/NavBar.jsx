import { Link } from "react-router-dom"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/">Movie App</Link>
        </div>
        <div>
            <Link className= "nav-link" to="/">Home</Link>
            <Link className= "nav-link" to="/Favorites">Favorites</Link>
        </div>
    </nav>
}

export default NavBar