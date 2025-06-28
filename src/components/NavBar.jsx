import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function NavBar () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
    }, [])

    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="categories" id="basic-nav-dropdown">
                            {categories.map(cat => (
                                <NavDropdown.Item as={Link} to={`/category/${cat}`} key={cat}>
                                    {cat}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar