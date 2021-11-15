import './NavBar.css';
import logo from "./Logo2.png";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <header className="container">
            <img className="logo" src={logo} alt="" />
            <nav >
                <ul className="nav_links">
                    <li>PRODUCTOS</li>
                    <button>CONTACTO</button>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );

};

export default NavBar;