import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <img src="/img/logo.png" alt="Imagen Logo" />
                </div>
                <ul className="nav-links">
                    <li className="nav-link" >Inicio</li>
                    <li className="nav-link" >Categorias</li>
                    <li className="nav-link" >Contacto</li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>

        </>
    )
}
export default Navbar;