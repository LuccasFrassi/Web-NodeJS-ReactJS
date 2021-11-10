import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import calculadora from './calculadora.png'

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Container>
            <Row>
              <Col>
                <Image src={calculadora} width="100px" height="100px" roundedCircle />
              </Col>
              <Col></Col>
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