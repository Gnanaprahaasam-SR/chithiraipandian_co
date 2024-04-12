import { Link } from "react-router-dom";
import logo from "../images/CA1.png"
import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {


    return (
        <div className="bg-dark" style={{ backgroundColor: "#fffff" }}>
            <div className="container ">
                <div className="row ">
                    <div className="col-12 col-md-4 text-white py-4">
                        <img src={logo} alt="log" width="40%" className="pb-4" />
                        <h4 style={{ color: "#cf9475" }}>Head Office</h4>
                        <p className="text-wrap">No.14/6M, Hospital Road, Sulur,<br /> Coimbatore -641 402. </p>
                    </div>
                    <div className="col-12 col-md-4 text-white py-4">
                        <h4 style={{ color: "#cf9475" }} >QUICK LINKS</h4>
                        <Link className="link" >Home</Link>
                        <Link className="link">About Us</Link>
                        <Link className="link">Services</Link>
                        <Link className="link">Career</Link>
                        <Link className="link">Experience</Link>
                        <Link className="link">Contact Us</Link>
                    </div>
                    <div className="col-12 col-md-4 py-4">
                        <h4 style={{ color: "#cf9475",paddingTop:"1.5%" }}>Contact Us</h4>
                        <p className="text-white">+91 94425 80495</p>
                        <p className="text-white">+91 94879 80495</p>
                        <h4 style={{ color: "#cf9475", paddingTop:"1.5%" }}>Mail Us</h4>
                        <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                        <h4 style={{ color: "#cf9475", paddingTop:"1.5%" }}>Follow Us</h4>
                        <div className="d-flex gap-3">
                            <SiFacebook color="white" size={20} />
                            <SlSocialInstagram color="white" size={20} />
                            <FaLinkedin color="white" size={20} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;