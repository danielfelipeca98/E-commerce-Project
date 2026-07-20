import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from './img/logo.png';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                   <img src="/img/Logo.png" alt="Logo" />
                </Link>

                </div>
                <ul className="nav-links">
                    <li className="nav-link" ><Link to="/">Inicio</Link></li>
                    <li className="nav-link" ><Link to="/categoria/skate">Skate</Link></li>
                    <li className="nav-link" ><Link to="/categoria/tattoo">Tatoo</Link></li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>

        </>
    )
}
export default Navbar;