import React, { useState, useRef, useEffect } from "react";
import Content from "./Content";
import { Employee } from "./AboutUs/AboutUs_OurTeam";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audit from "../images/Audit&Assurance.png";
import bookkeeper from "../images/Bookkeeping.png";
import discussion from "../images/Discusion.png";
import indirect from "../images/IndirectTax.png";
import Secretarial from "../images/Secretarial.png";
import DirectTax from "../images/DirectTax.png";
import { CiCircleCheck } from "react-icons/ci";
// import { PiCloudSlash } from "react-icons/pi";
import chithirapandian from "../images/TeamImage/CA_T_CHITHIRAI_PANDIAN.jpeg";
import suba from "../images/TeamImage/CA_SUBA_SHREE_SV.jpeg";
import Mithra from "../images/TeamImage/CA_V_MITHRA.jpeg";
import { IoArrowRedo } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cardItems = [
  {
    id: 1,
    icon: audit,
    title: "Audit & Assurance Services",
    description: ["Bank Audit", "Internal Audit", "Stock Audit", "Tax Audit",],
    link: "/service/auditAndAssuranceServices"
  },
  {
    id: 2,
    icon: DirectTax,
    title: "Direct Tax Services",
    description: ["Domestic", "International"],
    link: "/service/directTaxServices"

  },
  {
    id: 3,
    icon: indirect,
    title: "Indirect Tax Services",
    description: ["GST Compliances", "GST Audit", "GST Returns and refund"],
    link: "/service/indirectTaxServices"

  },
  {
    id: 4,
    icon: discussion,
    title: "Advisory Services",
    description: ["Preparing Business Plan", "Corporate Restructing", "Budget and Forecas", "Share Valuation"],
    link: "/service/advisoryServices"

  },
  {
    id: 5,
    icon: Secretarial,
    title: "Secretarial",
    description: ["Drafting of LLP Agreement", "Retruns of ROC & LLP", "Modification in LLP", "Conversion of firm into LLP and Vice Versa"],
    link: "/service/secretarial"

  },
  {
    id: 6,
    icon: bookkeeper,
    title: "Bookkeeping Services",
    description: ["Accounting supervision", "Management reports", "Statutory returns", "Preparation of MIS reports"],
    link: "/service/bookkeepingServices"

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
        <div>
          <img src={suba} alt="suba" className="slider-image" />
        </div>
        <div>
          <img src={Mithra} alt="mithra" className="slider-image" />
        </div>
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
  const [activeIndex, setActiveIndex] = useState(0);

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

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
    <div className="home  overflow-hidden ">
      {/* <div className="home_section_1">
        <Carousel
          indicators={false}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        >
          <Carousel.Item interval={2000}>
            <div className="carousel-item-container">
              <img src={home?.Carousel?.slide1} alt="timer" className="carousel-image" />
              <div className={`carousel-item-content ${activeIndex === 0 ? "active" : ""}`} >
                <h3 className="animated-text">{home?.Carousel?.title1}</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel-item-container">
              <img src={home?.Carousel?.slide2} alt="timer" className="carousel-image" />
              <div className={`carousel-item-content ${activeIndex === 1 ? "active" : ""}`} >
                <h3 className="animated-text">{home?.Carousel?.title2}</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="carousel-item-container">
              <img src={home?.Carousel?.slide3} alt="timer" className="carousel-image" />
              <div className={`carousel-item-content ${activeIndex === 2 ? "active" : ""}`} >
                <h3 className="animated-text">{home?.Carousel?.title3}</h3>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div> */}
      <div className="row container-fluid hero-section d-flex  g-2">
        <div className="col-md-6 col-12 p-5">

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
            <button className="our-service" >
              Our Services
            </button>
            <button className="talk-button" >
              Let's Talk
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 " >
          <img src={require("../images/indomay19.jpg")} alt="hero section" width="100%" />
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
      <h4 className=" main-title text-center pb-3">ABOUT US</h4>
      <div className="row about-us py-5">

        <div className="col-md-6 col-12 px-5 ">

          <p style={{ textAlign: "justify" }}> With over 20 years of experience in accountancy, auditing, and taxation, he has earned a reputation as a trusted advisor in both domestic and international taxation. He has been instrumental in modernizing the firm, expanding its services to include Knowledge Process Outsourcing for clients in India and abroad. His expertise covers indirect taxation, such as VAT, Excise, Service Tax, and the evolving GST landscape. Additionally, he has contributed to the firm's growth by diversifying its consultancy services and specializes in Company Law and LLP matters.{isExpanded ? (<span> Beyond his professional work, he actively engages in community service and has delivered lectures on various professional topics.</span>) : ".."} </p>
          <div className="d-flex justify-content-end">
            <button onClick={toggleReadMore} className="readmore">
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 px-5 d-flex justify-content-center align-items-center">
          <img src={chithirapandian} alt="chithirapandian" height={350} />
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white p-3 container our-service">
        <h3 className=" main-title text-center">Our services</h3>
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
                <Link to={item.link} className="text-decoration-none">
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
            <b>A Blend of Expertise and Innovation </b>
            At the heart of our firm is a dynamic team of professionals, each bringing specialized skills and a commitment to excellence. From our seasoned Chartered Accountants and Company Secretaries to our dedicated Executives and Article Trainees, every member plays a critical role in delivering exceptional service to our clients.
          </div>
          <div className="py-3">
            <ul>
              <p> <IoArrowRedo /> <b>Proprietor:</b> Leading our firm with years of industry experience, our Proprietor ensures that we maintain the highest standards of quality and integrity.</p>
              <p> <IoArrowRedo /> <b>Chartered Accountants:</b> Our CAs offer expert guidance on financial reporting, taxation, audits, and strategic financial planning, providing clients with insights to drive business success.</p>
              <p> <IoArrowRedo /> <b>Company Secretaries:</b> Ensuring corporate compliance and governance, our Company Secretaries help businesses navigate complex regulatory frameworks efficiently.</p>
              <p> <IoArrowRedo /> <b>Executives (Non-CA):</b>  With diverse expertise in management and operations, our Executives facilitate seamless client interactions and ensure efficient project delivery.</p>
              <p> <IoArrowRedo /> <b>Article Trainees:</b> Our trainees, the future of the profession, work under the guidance of experienced professionals, gaining hands-on experience in all facets of accounting and finance.</p>
              <p> <IoArrowRedo /> <b>Support Staff:</b> Behind the scenes, our support team ensures smooth operations, providing vital administrative and technical assistance to the entire firm.</p>

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

    </div>
  );
};

export default Home;