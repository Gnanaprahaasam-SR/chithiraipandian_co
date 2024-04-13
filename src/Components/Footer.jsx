import { Link } from "react-router-dom";
import logo from "../images/CA1.png"
import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
 
const Footer = () => {
 
 
    return (
        <div className="footer " >
            <div className="container ">
                <div className="row ">
                    <div className="col-12 col-md-4 text-white py-4">
                        <img src={logo} alt="log" width="40%" className="pb-4" />
                        <h4 >Head Office</h4>
                        <p className="text-wrap">No.14/6M, Hospital Road, Sulur,<br /> Coimbatore -641 402. </p>
                    </div>
                    <div className="col-12 col-md-4 text-white py-4">
                        <h4 className="">QUICK LINKS</h4>
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/aboutus/thefirm" >About Us</Link>
                        <Link className="link" to="">Services</Link>
                        <Link className="link" to="" >Career</Link>
                        <Link className="link" to="/experience">Experience</Link>
                        <Link className="link" to="/contact">Contact Us</Link>
                    </div>
                    <div className="col-12 col-md-4 py-4">
                        <h4>Contact Us</h4>
                        <p className="text-white">+91 94425 80495</p>
                        <p className="text-white">+91 94879 80495</p>
                        <h4>Mail Us</h4>
                        <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                        <h4>Follow Us</h4>
                        <div className="d-flex gap-3">
                            <SiFacebook color="white" size={20} />
                            <SlSocialInstagram color="white" size={20} />
                            <FaLinkedin color="white" size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-center pb-2 text-wrap">
                Copyright &#169; 2024 chithiraipandian&co.com All rights reserved
            </div>
 
        </div>
    )
}
 
export default Footer;