import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default () => {

    const cart = useSelector(state => state.cart)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Shopper Shopper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link to="/cart" as={Link}>My Cart {cart.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}