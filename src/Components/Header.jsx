import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/CA1.png";
import servicesData from '../pages/Services/ServiceData';
import "../App.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"  >
          <img src={logo} alt="Company Logo" width={70}  className="d-inline me-3 "/> 
        </Navbar.Brand>
        <p className="d-flex mt-3">Chithiraipandian&Co </p>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#cf9475", border:"none",outline:"none"}} />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end" >
          <Nav className="d-flex mx-left my-2 my-lg-0 gap-2" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/" className="menu_link">
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={Link} to="/aboutus/thefirm">The Firm</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/aboutus/ourvalue">Our Value</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/aboutus/ourteam">Our Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="navbarScrollingDropdown" >
              {servicesData.map((service, index) => (
                <NavDropdown.Item key={index} className="menu_link" as={Link} to={`/service/${service.servicesKey}`}>{service.title}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Resource" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={Link} to="/gstcalculator">GST Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/tdscalculator">TDS Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/emicalculator">EMI Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/nsccalculator">NSC Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link} to="/netprofitcalculator">Calculate Net profit </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" >Knowledge Bank</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" className="menu_link">
              Career
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" className="menu_link">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-nowrap menu_link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
