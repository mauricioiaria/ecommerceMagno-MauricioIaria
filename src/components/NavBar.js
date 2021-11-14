import "./NavBar.css";
import logo from './Logo2.png';

const NavBar = () => {

    return (
        <header className="container">
            <img className="logo" src={logo} alt="" />
            <nav >
                <ul className="nav_links">
                    <li>HOME</li>
                    <li>PRODUCTOS</li>
                    <li>CATEGORIAS</li>
                </ul>
            </nav>
            <button>CONTACTO</button>
        </header>
    );

};

export default NavBar;