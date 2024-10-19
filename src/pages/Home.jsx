import React, { useState, useRef, useEffect } from "react";
import Content from "./Content";
import { Employee } from "./AboutUs/AboutUs_OurTeam";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audit from "../images/Audit&Assurance.png";
import bookkeeper from "../images/Bookkeeping.png";
import Advisory from "../images/Advisory.png";
import indirect from "../images/IndirectTax.png";
import Secretarial from "../images/Secretarial.png";
import DirectTax from "../images/DirectTax2.png";
import { CiCircleCheck } from "react-icons/ci";
// import { PiCloudSlash } from "react-icons/pi";
import chithirapandian from "../images/TeamImage/CA-6.png";
import Team from "../images/TeamImage/CA-13.png";
import Team2 from "../images/TeamImage/CA-11.png";
import Team3 from "../images/TeamImage/CA-17.png";
import Team4 from "../images/TeamImage/CA-18.png";
import Team5 from "../images/TeamImage/CA-14.png";
import Team6 from "../images/TeamImage/CA-10.png";
import Team7 from "../images/TeamImage/CA-8.png";
import { IoArrowRedo } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamImage = [Team, Team2, Team3, Team4, Team5, Team6, Team7];
const cardItems = [
  {
    id: 1,
    icon: audit,
    title: "Audit & Assurance Services",
    description: ["Bank Audit", "Internal Audit", "Stock Audit", "Tax Audit",],
    link: "/service"
  },
  {
    id: 2,
    icon: DirectTax,
    title: "Direct Tax Services",
    description: ["Domestic", "International"],
    link: "/service"

  },
  {
    id: 3,
    icon: indirect,
    title: "Indirect Tax Services",
    description: ["GST Compliances", "GST Audit", "GST Returns and refund"],
    link: "/service"

  },
  {
    id: 4,
    icon: Advisory,
    title: "Advisory Services",
    description: ["Preparing Business Plan", "Corporate Restructing", "Budget and Forecas", "Share Valuation"],
    link: "/service"

  },
  {
    id: 5,
    icon: Secretarial,
    title: "Secretarial",
    description: ["Drafting of LLP Agreement", "Retruns of ROC & LLP", "Modification in LLP", "Conversion of firm into LLP and Vice Versa"],
    link: "/service"

  },
  {
    id: 6,
    icon: bookkeeper,
    title: "Bookkeeping Services",
    description: ["Accounting supervision", "Management reports", "Statutory returns", "Preparation of MIS reports"],
    link: "/service"

  }
];

function TextTypingAnimation(props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const timeoutRef = useRef(null);
  const displayedTextRef = useRef("");

  useEffect(() => {
    if (props.texts?.length !== 0) {
      const isEmptyDisplay = displayedTextRef.current === "";
      // to extra delay in order to show fully text
      const shouldDelayNextProcess =
        isDelete &&
        displayedTextRef.current.length === props.texts[textIndex].length;

      displayedTextRef.current = props.texts[textIndex].substr(0, charIndex);

      timeoutRef.current = setTimeout(
        () => {
          if (isDelete && isEmptyDisplay) {
            // when finish the deletion of current text, then start displaying next text index
            // if it's the last index already, then start the first text index
            setIsDelete(false);
            setTextIndex((prevTextIndex) =>
              prevTextIndex + 1 < props.texts.length ? prevTextIndex + 1 : 0
            );
          } else if (
            isDelete ||
            displayedTextRef.current === props.texts[textIndex]
          ) {
            // if the current text is displayed fully OR on deletion process,
            // then decrease sub-string index of current text to start deletion process
            setIsDelete(true);
            setCharIndex((prevSubIndex) =>
              prevSubIndex !== -1 ? prevSubIndex - 1 : 0
            );
          } else if (
            !isDelete &&
            displayedTextRef.current !== props.texts[textIndex]
          ) {
            // if it is not on deletion process and the full text has not been displayed yet
            // then increase sub-string index of current text
            setCharIndex((prevCharIndex) =>
              prevCharIndex + 1 <= props.texts[textIndex].length
                ? prevCharIndex + 1
                : 0
            );
          }
        },
        shouldDelayNextProcess ? 2000 : 150 - Math.random() * 100
      );
    }

    return () => clearTimeout(timeoutRef.current);
  }, [props.texts, charIndex, textIndex, isDelete]);

  return (
    <h2 className={props.className}>
      {displayedTextRef.current}
      <span className="cursor "> |</span>
    </h2>
  );
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="custom-left-arrow rounded-circle"
      onClick={onClick}
      style={{
        border: 'none',
        zIndex: 999,
        position: 'absolute',
        right: '65px',
        bottom: '5%',
        cursor: 'pointer',
        padding: '5px',
        background: " rgba(122, 236, 193, 0.733)",
      }}
    >
      <IoIosArrowBack size={24} className="text-white" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="custom-right-arrow rounded-circle "
      onClick={onClick}
      style={{
        border: 'none',
        zIndex: 999,
        position: 'absolute',
        right: '20px',
        bottom: '5%',
        cursor: 'pointer',
        padding: '5px',
        background: " rgba(122, 236, 193, 0.733)",
      }}
    >
      <IoIosArrowForward size={24} className="text-white" />
    </button>
  );
};

const TeamData = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  return (
    <div className="slider-container " style={{ position: 'relative' }}>
      <Slider {...settings}>
        <div>
          <img src={chithirapandian} alt="chithirapandian" className="slider-image" />
        </div>

        {TeamImage.map((item, index) => (
          <div key={index}>
            <img src={item} alt="Team" className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

const testimonials = [
  { id: 1, text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", author: "George Adade" },
  { id: 1, text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", author: "Johna Adade" }

];

const Home = () => {
  const home = Content.Home;

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = () => {
    window.scroll(0, 0);
  }


  const testimonialSetting = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  return (
    <div className="home container-fluid overflow-hidden ">

      <div className="row container-fluid hero-section d-flex  d-flex align-items-center  g-2">
        <div className="col-md-6 col-12 px-5">
          <div className="pb-2">
            <h2 className="d-inline main-title">Manage Your </h2>
            <TextTypingAnimation
              className="d-inline typing"
              texts={["Accounting Standards", "Balance Sheet", "Bookkeeping", "Ledger", "Income Statement", "Taxation"]}
            /> <br />
            <h2 className="main-title">In a Right Way.</h2>
          </div>
          <div className="py-2 " >
            <p style={{ textAlign: "justify" }}>Chithirai Pandian & Co firm is a top provider of accounting, audit, and tax services for both businesses and individuals. Our team of skilled professionals brings extensive experience, ensuring your financial needs are managed with precision and efficiency.</p>
            <p style={{ textAlign: "justify" }}>
              Utilizing the latest technology, we serve clients worldwide and maintain a strong presence in the India and beyond through remote services. Our commitment is to deliver exceptional quality and consistently exceed client expectations.
            </p>
            <p>To know more, </p>
          </div>

          <div className="d-flex  justify-content-center gap-5">
            <Link to="/service" onClick={handleChange} className="text-decoration-none">
              <button className="our-service" >
                Our Services
              </button>
            </Link>
            <Link to="/contact" onClick={handleChange} className="text-decoration-none">
              <button className="talk-button" >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-12  d-flex justify-content-center " >
          <img src={require("../images/indomay19.jpg")} alt="hero section" width="80%"  /> 
        </div>
      </div>

      {/* Legal information */}
      {/* <div className=" row legal_information  ">
        <div className="col-12  col-sm-12 col-md-4 text-start align-content-center text-wrap p-5 ">
          <div className="text-content ">
            <h4 className="legal_title" >{home?.emergencyCase?.title}</h4>
            <p className="legal_content"> {home?.emergencyCase?.description}</p>
            <h4 className="legal_title">Call Us Now</h4>
            <p className="legal_content">{home?.emergencyCase?.contanct}</p>
          </div>
        </div>
        <div className="col-12  col-sm-12  col-md-4 p-5 align-content-center">
         
          <div className="text-content ">
            <h4 className="legal_title">{home?.legalHelp?.title}</h4>
            <p className="legal_content">{home?.legalHelp?.description}</p>
            <button className="appointment_btn ">
              {home?.legalHelp.button} &rarr;
            </button>
          </div>
        </div>
        <div className="col-12 col-md-4 align-content-center p-5">
          
          <div className="text-content">
            <table >
              <tbody>
                <tr>
                  <td colSpan="2">
                    <h4 className="legal_title">{home?.workingHour?.title}</h4>
                  </td>
                </tr>
                <tr  >
                  <td className="legal_content">{home?.workingHour?.weekdays}</td>
                  <td className="legal_content">{home?.workingHour?.weekdayTiming}</td>
                </tr>
                <tr>
                  <td className="legal_content">{home?.workingHour?.weekend}</td>
                  <td className="legal_content">{home?.workingHour?.weekendTiming}</td>
                </tr>
                <tr>
                  <td className="legal_content">{home?.workingHour?.weekoff}</td>
                  <td className="legal_content">{home?.workingHour?.weekoffTiming}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div> */}

      {/* About us */}
      <h3 className=" main-title text-center pb-3">About Us</h3>
      <div className="row about-us py-5 d-flex flex-sm-row-reverse justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-5 d-flex justify-content-center pb-3">
          <img src={chithirapandian} alt="chithirapandian" width="90%" />
        </div>
        <div className="col-md-6 col-12 px-5  pb-3">
          <p style={{ textAlign: "justify" }}> He has over 20 years of extensive experience in accountancy, auditing, and both domestic and international taxation. Throughout his career, he has earned a strong reputation as an advisor in these fields, including expertise in international taxation. He played a key role in transforming the firm's approach from traditional methods to more technology-driven practices. Under his leadership, the firm's services have expanded to include Knowledge Process Outsourcing (KPO) for clients both in India and abroad. Additionally, he has broadened the firm’s service portfolio from traditional auditing and taxation to a wide range of consultancy services. He has also developed expertise in indirect taxes like VAT, excise, and service tax, and is now exploring the area of GST. </p>
          <br />

          {isExpanded ? (<span> Beyond his tax and auditing work, he has gained experience in company law matters and Limited Liability Partnerships (LLP).He has delivered several lectures on various professional topics at different forums and has held leadership roles at the Lions Club in Sulur, Coimbatore.
          </span>) : ""}

          <div className="d-flex justify-content-end">
            <button onClick={toggleReadMore} className="readmore">
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

      </div>

      {/* Our Services */}
      <div className="bg-white p-3 container our-service">
        <h3 className=" main-title text-center">Our Services</h3>
        <div className="row">
          {cardItems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 g-4">
              <div className={`serviceCard-item serviceCard-item-${index + 1} shadow`}>
                <span className="serviceCard-icon px-2">
                  <img src={item.icon} alt="" width="100%" />
                </span>
                <b className="serviceCard-item-title px-2">{item.title}</b>
                <div className="serviceCard-description px-2">
                  {item.description.map((item, index) =>
                    <div key={index} className="d-flex gap-2">
                      <CiCircleCheck size={20} className="text-primary" />
                      <p className="text-wrap">{item}</p>
                    </div>
                  )}
                </div>
                <Link to={item.link} onClick={handleChange} className="text-decoration-none">
                  <button className="serviceCard-button ">
                    <FaArrowRight fontSize={23} className="me-3" />  Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <h3 className=" main-title text-center py-2 ">Our Team</h3>
      <div className="row our-team d-flex align-items-center py-4 ">
        <div className="col-md-6 px-5 ">
          <div className="background-layer">
            <div className=" team-carosal">
              <TeamData />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-5 ">
          <div style={{ textAlign: 'justify' }}>
            <p>
              Our firm is powered by a dynamic team of experts dedicated to delivering top-tier service. Led by our experienced Proprietor, we uphold the highest standards of quality and integrity.
            </p>
          </div>
          <div className="py-3">
            <ul>
              <p> <IoArrowRedo /> <b>Chartered Accountants:</b> Providing expert advice on financial reporting, taxation, audits, and strategic planning to drive business success.</p>
              <p> <IoArrowRedo /> <b>Company Secretaries:</b> Ensuring corporate compliance and governance, guiding businesses through regulatory complexities.</p>
              <p> <IoArrowRedo /> <b>Executives (Non-CA):</b> Facilitating smooth client interactions and efficient project delivery with diverse management expertise.</p>
              <p> <IoArrowRedo /> <b>Article Trainees:</b> The future of the profession, gaining hands-on experience under skilled mentorship.</p>
              <p> <IoArrowRedo /> <b>Support Staff:</b> Providing essential administrative and technical support to keep operations running smoothly.</p>
            </ul>
          </div>
        </div>

      </div>

      {/* Client Testimonial's */}
      <h3 className=" main-title text-center py-3">Client Testimonial's</h3>

      <div className="slider-container pb-4" style={{ position: 'relative' }}>
        <Slider {...testimonialSetting}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" client-testimonial d-flex justify-content-center pb-5">
              <div className=" testimonial-card p-5">
                <div>{testimonial.text}</div>
                <span className="testimonial-author">-{testimonial.author}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div >
  );
};

export default Home;