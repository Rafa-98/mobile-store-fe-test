import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart2 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import './header.css'

import { useSelector } from "react-redux";

function Header() {

  const cart = useSelector((state) => state.cart)

    return (
        <Navbar bg="danger" data-bs-theme="dark" fixed='top'  expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/">Mobile Store</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>                  
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Cart2  size={40} /><Badge bg="success" className='badgePosition'>{cart.quantity}</Badge>
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header