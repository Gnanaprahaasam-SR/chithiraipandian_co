// import { Link } from "react-router-dom";
import logo from "../images/CALogo1.png"
import ContactUsImage from "../images/ContactUsImage.jpg"

import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import { FaLocationDot, FaPhone, FaLinkedin } from "react-icons/fa6";
import { GiShadowFollower } from "react-icons/gi";

const Footer = () => {

    // const handleChange = () => {
    //     window.scroll(0, 0);
    // }

    const [enquiryData, setEnquiryData] = useState([]);

    return (
        <div className="footer  bg-light" >
            <div className="container pt-5">
                {/* <div className="row  info-box ">
                    <div className="col-md-6 p-5 info-box-content">
                        <div className="d-flex flex-column align-items-start ">
                            <div className="pb-3 ">
                                <img src={logo} alt="Company Logo" width={40} className=" " />
                                <h6 className="" >CHITHIRAI PANDIAN & CO </h6>
                            </div>
                            <h3 className="">We're here to help you</h3>
                            <div className="info-title">We'd Love</div>
                            <h2 className="info-subTitle">TO HEAR FROM YOU</h2>
                            <div>Schedule time to talk with an expert matched to your accounting and taxation needs.</div>
                        </div>
                    </div>
                    <div className="col-md-6 p-2">
                        <form className="footer-form" >
                            <input type="text" name="fullname" value={enquiryData.name} className="footer-input" placeholder="Full Name*" required />
                            <input type="email" name="email" value={enquiryData.email} className="footer-input" placeholder="Email Address*" required />
                            <input type="text" name="phone" value={enquiryData.phone} className="footer-input" placeholder="Phone*" required />
                            <input type="text" name="company" className="footer-input" placeholder="Company" />
                            <input type="text" name="Services" className="footer-input" placeholder="Services You Are Intrested In*" required />
                            <textarea name="help" id="help" className="footer-input" placeholder="How Can We Help You?*" rows={4} required></textarea>
                            <button type="submit" className="footer-btn">Submit</button>
                        </form>
                    </div>
                </div> */}

                <div className="row  info-box ">
                    <div className="col-md-6 col-12 info-box-content">
                        <h3>Contact Us</h3>
                        <p>We're open for any suggestion or just to have a chat</p>
                        {/* <div className="d-flex row w-100 ">
                            <div className="col-12 col-sm-6 col-md-6">
                                <h6><FaLocationDot size={20} className="me-1" /> Head Office</h6>
                                <p className="text-wrap"> No:14/6M, Hospital Road, Sulur,<br /> Coimbatore - 641 402. </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6> <FaTelegramPlane size={20} className="me-1" />Mail Us</h6>
                                <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6><FaPhone size={18} className="me-1" />Contact Us</h6>
                                <span>+91 94425 80495</span>
                                <p className="">+91 94879 80495</p>
                            </div>
                        </div> */}

                        <form className="footer-form p-3" >
                            <input type="text" name="fullname" value={enquiryData.name} className="footer-input" placeholder="Full Name*" required />
                            <input type="email" name="email" value={enquiryData.email} className="footer-input" placeholder="Email Address*" required />
                            <input type="text" name="phone" value={enquiryData.phone} className="footer-input" placeholder="Phone*" required />
                            {/* <input type="text" name="company" className="footer-input" placeholder="Company" />
                            <input type="text" name="Subject" className="footer-input" placeholder="Subject*" required /> */}
                            <textarea name="help" id="help" className="footer-input" placeholder="Create a message here?*" rows={4} required></textarea>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="footer-btn">Send Message</button>
                            </div>
                        </form>
                        {/* <div className=" d-flex align-items-center justify-content-center flex-column">
                            <h3> Follow us here</h3>
                            <div className="d-flex  gap-3">
                                <SiFacebook size={20} className="footer-icon" />
                                <SlSocialInstagram size={20} className="footer-icon" />
                                <FaLinkedin size={20} className="footer-icon" />
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-6 p-2">
                        <img src={ContactUsImage} alt="ContactUsImage" width="100%" className="rounded-4" />
                    </div>
                </div>
                <hr className="" />
                <div className="row d-flex justify-content-between align-items-start g-3">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div>
                            <h6><FaLocationDot size={20} className="me-1" /> Head Office</h6>
                            <p className="text-wrap"> No:14/6M, Hospital Road, Sulur,<br /> Coimbatore - 641 402. </p>
                        </div>

                        <div>
                            <h6><FaPhone size={18} className="me-1" />Contact Us</h6>
                            <span>+91 94425 80495</span>
                            <p className="">+91 94879 80495</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3  ">
                        <div className="mb-3">
                            <h6> <FaTelegramPlane size={20} className="me-1" />Mail Us</h6>
                            <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                        </div>

                        <div>
                            <h6> <GiShadowFollower size={20} className="me-1" />Follow Us</h6>
                            <div className="d-flex  gap-3">
                                <SiFacebook size={20} className="footer_icon" />
                                <SlSocialInstagram size={20} className="footer_icon" />
                                <FaLinkedin size={20} className="footer_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="" />
            </div>

            <div className="text-center pb-2 text-wrap ">
                Copyright &#169; 2024 &nbsp; | &nbsp; chithiraipandian&co.com &nbsp; | &nbsp; All rights reserved
            </div>

        </div>
    )
}

export default Footer;