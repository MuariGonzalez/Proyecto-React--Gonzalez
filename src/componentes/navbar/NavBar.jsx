import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from "../CartWidget/CardWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="light">
      <Container className='nav'>
        <Navbar.Brand>
          <Link className='afrodita' to="/">
            <h1>Afrodita SexShop</h1>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/categoria/lenceria">Lenceria</NavLink>
          <NavLink to="/categoria/lubricantes">Lubricantes</NavLink>
          <NavLink to="/categoria/vibradores">Vibradores</NavLink>
        </Nav>
        <CardWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;



