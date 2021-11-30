import './NavBar.css';
import logo from "./Logo2.png";
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Image, NavbarBrand, Nav, NavDropdown, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const NavBar = () => {

    return (
        // <header className="container">
        //     <img className="logo" src={logo} alt="" />
        //     <nav >
        //         <ul className="nav_links">
        //             <li>PRODUCTOS</li>
        //             <button>CONTACTO</button>
        //         </ul>
        //     </nav>
        //     <CartWidget />
        // </header>

        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container Fluid>
                <NavbarBrand>
                    <Image src={logo} width="350px" height="100px" />
                </NavbarBrand>
                <NavbarToggle />
                <Container>
                    <NavbarCollapse>
                        <Nav>
                            <NavDropdown className="navBarStyle" title="Categorias">
                                <NavDropdown.Item href='Categorias/maquinasElectricas'>Maquinas Electricas</NavDropdown.Item>
                                <NavDropdown.Item href='Categorias/herramientas'>Herramientas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navBarStyle" href="sobre-nosotros">Sobre Nosotros</Nav.Link>
                            <Nav.Link className="navBarStyle" href="contacto">Contacto</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
                <CartWidget />
            </Container>
        </Navbar>

    );

};

export default NavBar;