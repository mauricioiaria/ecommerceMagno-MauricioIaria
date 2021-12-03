//Router
import { Link } from "react-router-dom";

//Imagenes
import logo from "./Logo2.png";

//CSS
import './NavBar.css';
import { Navbar, Image, NavbarBrand, Nav, NavDropdown, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



//Components
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container Fluid>
                <NavbarBrand>
                    <Image src={logo} width="350px" height="100px" />
                </NavbarBrand>
                <NavbarToggle />
                <Container>
                    <NavbarCollapse>
                        <Nav>
                            <Link to="/">
                                <NavDropdown className="navBarStyle" title="Inicio">
                                    <NavDropdown.Item href='Categorias/maquinasElectricas'>Maquinas Electricas</NavDropdown.Item>
                                    <NavDropdown.Item href='Categorias/herramientas'>Herramientas</NavDropdown.Item>
                                </NavDropdown>
                            </Link>
                            <Link to='/SobreNosotros'>
                                <Nav.Link className="navBarStyle" href="sobre-nosotros">Sobre Nosotros</Nav.Link>
                            </Link>
                            <Link to='/Contacto'>
                                <Nav.Link className="navBarStyle" href="contacto">Contacto</Nav.Link>
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
                <CartWidget />
            </Container>
        </Navbar>

    );

};

export default NavBar;