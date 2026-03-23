import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <img src="/img/logo.png" alt="Imagen Logo" />
                </div>
                <div className="nav-links">
                    <a className="nav-link" href="##">Inicio</a>
                    <a className="nav-link" href="##">Categorias</a>
                    <a className="nav-link" href="##">Contacto</a>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>

        </>
    )
}
export default Navbar;