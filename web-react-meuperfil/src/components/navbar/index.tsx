import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Meu Perfil</Navbar.Brand>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;