import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from "../CarWidget/CardWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Afrodita SexShop</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/categoria/lenceria">Lenceria</NavLink>
          <NavLink to="/categoria/juguetes">Juguetes</NavLink>
          <NavLink to="/categoria/vibradores">Vibradores</NavLink>
        </Nav>
        <CardWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;



