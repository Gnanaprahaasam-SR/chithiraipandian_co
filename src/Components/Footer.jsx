// import { Link } from "react-router-dom";
import logo from "../images/CALogo1.png"
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
                <div className="row  info-box ">
                    <div className="col-md-6 p-5 bg-white">
                        <div className="d-flex flex-column align-items-start ">
                            <div className="pb-3 ">
                                <img src={logo} alt="Company Logo" width={40} className=" " />
                                <h6 className="" style={{ color: "#116391" }}>CHITHIRAI PANDIAN & CO </h6>
                            </div>
                            <h3 className="">We're here to help You</h3>
                            <div className="info-title">We'd Love</div>
                            <h2 className="info-subTitle">TO HEAR FROM YOU</h2>
                            <div>Schedule time to talk with an expert matched to your Accounting and taxation needs.</div>
                        </div>
                    </div>
                    <div className="col-md-6 p-2">
                        <form className="footer-form" >
                            <input type="text" name="fullname" value={enquiryData.name} className="footer-input" placeholder="Full Name*" required />
                            <input type="email" name="email" value={enquiryData.email} className="footer-input" placeholder="Email Address*" required />
                            <input type="text" name="phone" value={enquiryData.phone} className="footer-input" placeholder="Phone*" required />
                            <input type="text" name="company" className="footer-input" placeholder="Company" />
                            <input type="text" name="Services" className="footer-input" placeholder="Services You Are Intersted In*" required />
                            <textarea name="help" id="help" className="footer-input" placeholder="How can we help you?*" rows={4} required></textarea>
                            <button type="submit" className="footer-btn">Submit</button>
                        </form>
                    </div>
                </div>
                <hr className="mx-5" />

                <div className="row d-flex justify-content-center align-items-start g-3">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div>
                            <h6><FaLocationDot size={20} className="me-1" /> Head Office</h6>
                            <p className="text-wrap"> No.14/6M, Hospital Road, Sulur,<br /> Coimbatore -641 402. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3  ">
                        <div>
                            <h6><FaPhone size={18} className="me-1" />Contact Us</h6>
                            <span>+91 94425 80495</span>
                            <p className="">+91 94879 80495</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 ">
                        <div>
                            <h6> <FaTelegramPlane size={20} className="me-1" />Mail Us</h6>
                            <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 ">
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
                <hr className="mx-5 " />
            </div>

            <div className="text-center pb-2 text-wrap">
                Copyright &#169; 2024 chithiraipandian&co.com All rights reserved
            </div>

        </div>
    )
}

export default Footer;