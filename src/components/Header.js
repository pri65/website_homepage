import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">All JObs</Nav.Link>
              <Nav.Link href="#services">Browse Candidates</Nav.Link>
              <Nav.Link href="#contact">Employers</Nav.Link>
              <Nav.Link href="#services">Recruiters</Nav.Link>
              <Nav.Link href="#contact">Free Resources</Nav.Link>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="#message">
                  <i class=" fa-message-lines"></i>Login
                </Nav.Link>
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
