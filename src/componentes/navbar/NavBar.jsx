import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from "../CarWidget/CardWidget"

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Afrodita SexShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Lenceria</Nav.Link>
                    <Nav.Link href="#features">Juguetes</Nav.Link>
                    <Nav.Link href="#pricing">Vibradores</Nav.Link>
                </Nav>
                <CardWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar



