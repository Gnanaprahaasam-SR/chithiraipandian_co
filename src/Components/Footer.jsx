
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactUsImage from "../images/ContactUsImage.jpg"

import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaLinkedin } from "react-icons/fa6";
import { SocialIcon } from 'react-social-icons'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    const form = useRef();
    const [enquiryData, setEnquiryData] = useState({
        from_name: '',
        from_mail: '',
        from_phone: '',
        message: ''
    });
    const [error, setError] = useState({});
    const ServiceId = "service_ncz3g0p";
    const TemplateId = "template_i5vl8el";
    const PublicKey = "cDIIOAgDFci-zUchB";

    const SuccessToast = () => {
        toast.success("Messge sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
        });
    }
    const FailerToast = () => {
        toast.error("Oops! Something went wrong.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
        });
    }
    const handleEnquiryChange = (e) => {
        setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const enquiryDataError = {};

        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(enquiryData.from_mail)) {
            enquiryDataError.email = 'Please enter a valid email address';
        }
        else if (!/^[0-9+\- ]+$/.test(enquiryData.from_phone)) {
            enquiryDataError.phone = 'Please enter a valid phone number';
        }
        if (enquiryData.message.length < 10) {
            enquiryDataError.message = 'Please enter a more than 10 characters';
        }

        setError(enquiryDataError);

        // Only submit if there are no errors
        if (Object.keys(enquiryDataError).length === 0) {
            emailjs.sendForm(ServiceId, TemplateId, form.current, PublicKey)
                .then((response) => {
                    SuccessToast();
                    console.log('SUCCESS!', response);
                    setEnquiryData({ from_name: '', from_mail: '', from_phone: '', message: '' });
                })
                .catch((error) => {
                    FailerToast();
                    console.error('FAILED...', error);
                });
        }
    };

    return (
        <div className="footer bg-light">
            <ToastContainer />
            <div className="container pt-5">
                <div className="row info-box">
                    <div className="col-md-6 col-12 info-box-content">
                        <h3>Contact Us</h3>
                        <p>We're here to help you</p>

                        <form className="footer-form p-3" ref={form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="from_name"
                                value={enquiryData.from_name}
                                className="footer-input"
                                placeholder="Full Name*"
                                onChange={handleEnquiryChange}
                                required
                            />

                            <input
                                type="email"
                                name="from_mail"
                                value={enquiryData.from_mail}
                                className="footer-input"
                                placeholder="Email Address*"
                                onChange={handleEnquiryChange}
                                required
                            />
                            {error.email && <p className='text-danger pb-2'>{error.email}</p>}

                            <input
                                type="text"
                                name="from_phone"
                                value={enquiryData.from_phone}
                                className="footer-input"
                                placeholder="Phone*"
                                onChange={handleEnquiryChange}
                                required
                            />
                            {error.phone && <p className='text-danger pb-2'>{error.phone}</p>}

                            <textarea
                                name="message"
                                id="message"
                                className="footer-input"
                                placeholder="Type a message here*"
                                value={enquiryData.message}
                                rows={4}
                                onChange={handleEnquiryChange}
                                required
                            ></textarea>
                            {error.message && <p className='text-danger pb-2'>{error.message}</p>}

                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="footer-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 p-2">
                        <img src={ContactUsImage} alt="Contact Us" width="100%" className="rounded-4" />
                    </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-between align-items-start g-3">
                    <div className="col-12 col-sm-6 col-md-4">
                        <h6><FaLocationDot size={20} className="me-1" /> Head Office</h6>
                        <p>No:14/6M, Hospital Road, Sulur, <br />Coimbatore - 641 402.</p>
                        <h6><FaLocationDot size={20} className="me-1" /> Branch Office</h6>
                        <p>No: 21, 5th Street, Sankar Layout,<br /> Lakshmipuram, Peelamedu, <br /> Coimbatore - 641004. </p>

                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <h6><FaPhone size={18} className="me-1" />Contact Us</h6>
                        <span>+91 944 258 0495</span>
                        <p>+91 948 798 0495</p>
                        <h6><FaTelegramPlane size={20} className="me-1" />Mail Us</h6>
                        <div className='pb-2'> <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a></div>

                        <h6>Follow Us On</h6>
                        <div className="d-flex gap-3">
                            <SocialIcon network="facebook" style={{ height: 25, width: 25 }} url='https://www.facebook.com/' />
                            <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} url='https://www.linkedin.com/' />
                            <SocialIcon network="instagram" style={{ height: 25, width: 25 }} url='https://www.instagram.com/' />

                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div class="d-flex justify-content-center align-items-center flex-wrap pb-2">
                <div>Copyright &#169; 2024 &nbsp; </div>
                <div>| &nbsp;<Link to="https://chithiraipandianandco.com">www.chithiraipandianandco.com</Link> &nbsp; |</div>
                <div>&nbsp; All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;
