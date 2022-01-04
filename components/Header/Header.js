import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Container,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://sunstone.edu.in/assets/images/logo-sunstone.webp"
              alt="Sunstone"
              height="80px"
              width="140px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Explore Programs"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">MBA</NavDropdown.Item>
                <NavDropdown.Item href="#action4">PDDM</NavDropdown.Item>
                <NavDropdown.Item href="#action5">BBA</NavDropdown.Item>
                <NavDropdown.Item href="#action5">MCA</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campuses" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Greater Noida
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Jaipur</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Pune</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Indore</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Admissions" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  Admission Process
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Fee Structure
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Placement</Nav.Link>
              <Nav.Link href="#action2">Hire From Sunstone</Nav.Link>
              <NavDropdown title="About Sunstone" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Core Team</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Advisory Board
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Blog</Nav.Link>
            </Nav>

            <Button variant="outline-success">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
