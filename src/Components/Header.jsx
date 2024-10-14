import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/CA1.png";
import servicesData from '../pages/Services/ServiceData';
import "../App.css";
 
function NavBar() {

  const handleChange = () => {
    window.scroll(0,0);
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link}  onClick={handleChange} to="/"  >
          <img src={logo} alt="Company Logo" width={70}  className="d-inline me-2 "/>
        </Navbar.Brand>
        <h5 className="d-flex mt-3 d-none d-sm-block fs-4" style={{color:"#116391"}}>Chithiraipandian & Co </h5>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#cf9475", border:"none",outline:"none"}} />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end" >
          <Nav className="d-flex mx-left my-2 my-lg-0 gap-2" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link}  onClick={handleChange} to="/" className="menu_link">
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={Link} onClick={handleChange} to="/aboutus/thefirm">The Firm</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/aboutus/ourvalue">Our Value</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/aboutus/ourteam">Our Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="navbarScrollingDropdown" >
              {servicesData.map((service, index) => (
                <NavDropdown.Item key={index} className="menu_link" as={Link} to={`/service/${service.servicesKey}`}>{service.title}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Resource" id="navbarScrollingDropdown">
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/gstcalculator">GST Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/tdscalculator">TDS Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/emicalculator">EMI Calculator</NavDropdown.Item>
              {/* <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/nsccalculator">NSC Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/autoloancalculator">AutoLoan Calculator</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/effectivecapital">EffectiveCapital</NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/netprofitcalculator">Calculate Net profit </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/networthcalculator">Calculate Networth </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/homeloancalculator">HomeLoan Calculator </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/installment">Get No.of Installment </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/HRAcalculator">HRA Calculator </NavDropdown.Item>
              <NavDropdown.Item className="menu_link" as={Link}  onClick={handleChange} to="/incometaxcalculator">Income Tax Calculator</NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/" className="menu_link">
              Career
            </Nav.Link> */}
            <Nav.Link as={Link}  onClick={handleChange} to="/experience" className="menu_link">
              Experience
            </Nav.Link>
            <Nav.Link as={Link}  onClick={handleChange} to="/contact" className="text-nowrap menu_link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;