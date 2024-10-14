import React, { useState } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import servicesData from '../pages/Services/ServiceData';

const Header2 = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // State to track which dropdown is active

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuVisible(prev => !prev);
    };

    // Toggle dropdown visibility
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) =>
            prevDropdown === dropdownName ? null : dropdownName
        );
    };

    // Handle dropdown item click
    const handleDropdownItemClick = () => {
        setActiveDropdown(null); // Close dropdown after selection
        setIsMenuVisible(false); // Optionally, close the entire menu (for mobile)
    };

    return (
        <header className="header">
            <section className="nav container">
                {/* Navigation menu */}
                <div className={`nav_menu ${isMenuVisible ? 'show-menu' : ''}`}>
                    {/* Home link */}
                    <NavLink to="/" className="nav_link" onClick={toggleMenu}>
                        <div>Home</div>
                    </NavLink>
                    
                    {/* About Us dropdown */}
                    <div className="dropdown_menu">
                        <div className="nav_link" onClick={() => toggleDropdown('about')}>
                            <div>About Us</div>
                            <i className="ri-arrow-down-s-line dropdown_arrow"></i>
                        </div>
                        {activeDropdown === 'about' && (
                            <div className="dropdown_item">
                                <NavLink to={`/aboutus/thefirm`} className="dropdown_link" onClick={handleDropdownItemClick}><div>The Firm</div></NavLink>
                                <NavLink to={`/aboutus/ourvalue`} className="dropdown_link" onClick={handleDropdownItemClick}><div>Our Value</div></NavLink>
                                <NavLink to={`/aboutus/ourteam`} className="dropdown_link" onClick={handleDropdownItemClick}><div>Our Team</div></NavLink>
                            </div>
                        )}
                    </div>

                    {/* Services dropdown */}
                    <div className="dropdown_menu">
                        <div className="nav_link" onClick={() => toggleDropdown('services')}>
                            <div>Services</div>
                            <i className="ri-arrow-down-s-line dropdown_arrow"></i>
                        </div>
                        {activeDropdown === 'services' && (
                            <div className="dropdown_item">
                                {servicesData.map((service, index) => (
                                    <NavLink key={index} to={`/service/${service.servicesKey}`} className="dropdown_link" onClick={handleDropdownItemClick}><div>{service.title}</div></NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Logo */}
                    <NavLink to="/" className="logo_link">
                        <img src={require("../images/CA1.png")} alt="Company Logo" width={70} className="d-inline" />
                    </NavLink>

                    {/* Resource dropdown */}
                    <div className="dropdown_menu">
                        <div className="nav_link" onClick={() => toggleDropdown('resource')}>
                            <div>Resource</div>
                            <i className="ri-arrow-down-s-line dropdown_arrow"></i>
                        </div>
                        {activeDropdown === 'resource' && (
                            <div className="dropdown_item">
                                <NavLink to={`/gstcalculator`} className="dropdown_link" onClick={handleDropdownItemClick}><div>GST Calculator</div></NavLink>
                                <NavLink to={`/tdscalculator`} className="dropdown_link" onClick={handleDropdownItemClick}><div>TDS Calculator</div></NavLink>
                                <NavLink to={`/emicalculator`} className="dropdown_link" onClick={handleDropdownItemClick}><div>EMI Calculator</div></NavLink>
                            </div>
                        )}
                    </div>

                    {/* Experience and Contact Us */}
                    <NavLink to="/" className="nav_link" onClick={toggleMenu}>
                        <div>Experience</div>
                    </NavLink>
                    <NavLink to="/" className="nav_link" onClick={toggleMenu}>
                        <div>Contact Us</div>
                    </NavLink>
                </div>

                {/* Mobile view */}
                <div className="small_screen_view">
                    <NavLink to="/" className="logo_icon">
                        <img src={require("../images/CA1.png")} alt="Company Logo" width={70} className="d-inline" />
                    </NavLink>
                    <div className="nav_toggle" onClick={toggleMenu}>
                        {!isMenuVisible ? (
                            <i className="ri-menu-line"></i>
                        ) : (
                            <i className="ri-close-line"></i>
                        )}
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header2;
