import React, { useState, useRef, useEffect } from "react";
import Content from "./Content";
// import { Carousel } from "react-bootstrap";
// import { Employee } from "./AboutUs/AboutUs_OurTeam";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audit from "../images/Audit&Assurance.png";
import bookkeeper from "../images/bookkeeper.png";
import discussion from "../images/discussion.png";
import indirect from "../images/indirect.png";
import receptionist from "../images/receptionist.png";
import taxes from "../images/taxes.png";
import { CiCircleCheck } from "react-icons/ci";
// import { PiCloudSlash } from "react-icons/pi";
import chithirapandian from "../images/TeamImage/CA_T_CHITHIRAI_PANDIAN.jpeg"

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
    icon: taxes,
    title: "Direct Tax Services",
    description: ["Domestic", "International"],
    link: "/service/directTaxServices"

  },
  {
    id: 3,
    icon: indirect,
    title: "Indirect Tax Services",
    description: ["GST Compliances", "GST Audit", "Filling of GST Returns and refund"],
    link: "/service/indirectTaxServices"

  },
  {
    id: 4,
    icon: discussion,
    title: "Advisory Services",
    description: ["GST Compliances", "GST Audit", "Filling of GST Returns and refund"],
    link: "/service/advisoryServices"

  },
  {
    id: 5,
    icon: receptionist,
    title: "Secretarial",
    description: ["GST Compliances", "GST Audit", "Filling of GST Returns and refund"],
    link: "/service/secretarial"

  },
  {
    id: 6,
    icon: bookkeeper,
    title: "Bookkeeping Services",
    description: ["GST Compliances", "GST Audit", "Filling of GST Returns and refund"],
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
            <h2 className="d-inline title">Manage Your </h2>
            <TextTypingAnimation
              className="d-inline typing"
              texts={["Accounting Standards", "Balance Sheet", "Bookkeeping", "Leadger", "Income Statement", "Taxation"]}
            /> <br />
            <h2 className="title">In a Right Way.</h2>
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

      <div className="row about-us">

        <div className="col-md-6 col-12 px-5 ">
          <h4 className="p-5 title text-center">ABOUT US</h4>
          <p style={{ textAlign: "justify" }}> With over 20 years of experience in accountancy, auditing, and taxation, he has earned a reputation as a trusted advisor in both domestic and international taxation. He has been instrumental in modernizing the firm, expanding its services to include Knowledge Process Outsourcing for clients in India and abroad. His expertise covers indirect taxation, such as VAT, Excise, Service Tax, and the evolving GST landscape. Additionally, he has contributed to the firm's growth by diversifying its consultancy services and specializes in Company Law and LLP matters.{isExpanded ? (<span> Beyond his professional work, he actively engages in community service and has delivered lectures on various professional topics.</span>) : ".."} </p>
          <div className="d-flex justify-content-end">
            <button onClick={toggleReadMore} className="readmore">
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img src={chithirapandian} alt="chithirapandian" />
        </div>
      </div>


      <div className="bg-white p-3 container">
      <h4 className="p-5 title text-center">Our services</h4>
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
                      <CiCircleCheck size={20} className="text-white" />
                      <p className="text-wrap">{item}</p>
                    </div>
                  )}
                </div>
                <Link to={item.link} className="text-decoration-none">
                  <button className="serviceCard-button ">
                    <FaArrowRight fontSize={23} className="me-3" />  learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employee carousel */}
      {/* <div className="position-relative">
        <Employee />
      </div> */}


    </div>
  );
};

export default Home;