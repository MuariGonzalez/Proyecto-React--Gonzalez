import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from "../CartWidget/CardWidget";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar className='nav' bg="primary" variant="light">
      <Container >
        <Navbar.Brand>
          <Link className='afrodita' to="/">
            <h1>Afrodita SexShop</h1>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/categoria/lenceria"><p className='navegador'>Lenceria</p></NavLink>
          <NavLink to="/categoria/lubricantes"><p className='navegador'>Lubricantes</p></NavLink>
          <NavLink to="/categoria/vibradores"><p className='navegador'>Vibradores</p></NavLink>
        </Nav>
        <CardWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;



