//Router
import { Link } from "react-router-dom";

//Imagenes
import logo from "./Logo2.png";

//CSS
import './NavBar.css';
import { Navbar, Image, NavbarBrand, Nav, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



//Components
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <NavbarBrand>
                    <Link to="/">
                        <Image src={logo} width="350px" height="100px" />
                    </Link>
                </NavbarBrand>
                <NavbarToggle />
                <Container>
                    <NavbarCollapse>
                        <Nav>
                            <Link to='/Categorias/maquinasElectricas'>
                                <Link to="category/electrica">
                                    <Nav.Link className="btn btn-primary navBarStyle" href="maquinasElectricas">Maquinas Electricas</Nav.Link>
                                </Link>
                            </Link>
                            <Link to='Categorias/herramientas'>
                                <Link to="category/herramienta">
                                    <Nav.Link className="btn btn-primary navBarStyle" href="herramientas">Herramientas</Nav.Link>
                                </Link>
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
                <Link to='/Cart'>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>

    );

};

export default NavBar;