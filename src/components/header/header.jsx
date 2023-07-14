import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart2 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

function Header() {
    return (
        <Navbar bg="danger" data-bs-theme="dark" fixed='top'  expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Mobile Store</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#home">Product Details</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Cart2  size={40} /><Badge bg="success">5</Badge>
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header