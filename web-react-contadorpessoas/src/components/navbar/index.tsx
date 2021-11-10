import React from 'react';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Container>
            <Row>
              <Image src="https://1757140519.rsc.cdn77.org/static/v3/img/logo_design/pt/logo_on_white_background.png" width="100px" height="100px" roundedCircle />
            </Row>
          </Container></Navbar.Brand>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;