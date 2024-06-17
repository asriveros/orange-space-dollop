// index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbarprim.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Logo1 from '../asets/guitarra.png'
function Navbarprim() {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo1}/> BEOMADAN - INSTITUTO DE MUSICA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/Contactos">Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Navbarprim;
