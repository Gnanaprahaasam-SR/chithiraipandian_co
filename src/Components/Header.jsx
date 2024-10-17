import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/CALogo1.png";
import servicesData from '../pages/Services/ServiceData';
import "../App.css";

function NavBar() {

  const handleChange = () => {
    window.scroll(0, 0);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={NavLink} onClick={handleChange} to="/" className="d-flex flex-column align-items-center" >
          <img src={logo} alt="Company Logo" width={40} className=" " />
          <h6 className="" style={{ color: "#116391" }}>CHITHIRAI PANDIAN & CO </h6>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end" >
          <Nav className="d-flex mx-left my-2 my-lg-0 gap-2" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={NavLink} exact onClick={handleChange} to="/" className="menu_link" >
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/aboutus/thefirm" >The Firm</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/aboutus/ourvalue" >Our Value</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/aboutus/ourteam" >Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} exact onClick={handleChange} to="/service" className="menu_link" >
              Services
            </Nav.Link>
            {/* <NavDropdown title="Services" id="navbarScrollingDropdown" >
              {servicesData.map((service, index) => (
                <NavDropdown.Item key={index} className="menu_link" as={NavLink} to={`/service/${service.servicesKey}`}>{service.title}</NavDropdown.Item>
              ))}
            </NavDropdown> */}
            <NavDropdown title="Resource" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/gstcalculator" >GST Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/tdscalculator" >TDS Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink} onClick={handleChange} to="/emicalculator" >EMI Calculator</NavDropdown.Item>
              {/* <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/nsccalculator">NSC Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/autoloancalculator">AutoLoan Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/effectivecapital">EffectiveCapital</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/netprofitcalculator">Calculate Net profit </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/networthcalculator">Calculate Networth </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/homeloancalculator">HomeLoan Calculator </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/installment">Get No.of Installment </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/HRAcalculator">HRA Calculator </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={NavLink}  onClick={handleChange} to="/incometaxcalculator">Income Tax Calculator</NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link as={NavLink} to="/" className="menu_link">
              Career
            </Nav.Link> */}
            <Nav.Link as={NavLink} exact onClick={handleChange} to="/experience" className="menu_link" >
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} exact onClick={handleChange} to="/contact" className=" menu_link" >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;