import React, { useState } from "react";
import Content from "./Content";
import { Carousel } from "react-bootstrap";
import { Employee } from "./AboutUs/AboutUs_OurTeam";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audit from "../images/audit.png";
import bookkeeper from "../images/bookkeeper.png";
import discussion from "../images/discussion.png";
import indirect from "../images/indirect.png";
import receptionist from "../images/receptionist.png";
import taxes from "../images/taxes.png";
import { CiCircleCheck } from "react-icons/ci";

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


const Home = () => {
  const home = Content.Home;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };


  return (
    <div className="home ">
      <div className="home_section_1 overflow-hidden ">
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

        {/* Legal information */}
        <div className=" row legal_information  ">
          <div className="col-12  col-sm-12 col-md-4 text-start align-content-center text-wrap p-5 ">
            {/* <img src={home?.emergencyCase?.image} alt="timer" width="110%" height="100%" className="container-image" /> */}
            <div className="text-content ">
              <h4 className="legal_title" >{home?.emergencyCase?.title}</h4>
              <p className="legal_content"> {home?.emergencyCase?.description}</p>
              <h4 className="legal_title">Call Us Now</h4>
              <p className="legal_content">{home?.emergencyCase?.contanct}</p>
            </div>
          </div>
          <div className="col-12  col-sm-12  col-md-4 p-5 align-content-center">
            {/* <img src={home?.legalHelp?.image} alt="timer" width="110%" height="100%" className="container-image" /> */}
            <div className="text-content ">
              <h4 className="legal_title">{home?.legalHelp?.title}</h4>
              <p className="legal_content">{home?.legalHelp?.description}</p>
              <button className="appointment_btn border p-2 text-nowrap ">
                {home?.legalHelp.button} &rarr;
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4 align-content-center p-5">
            {/* <img src={home?.workingHour?.image} alt="workingHour" width="110%" height="100%" className="container-image" /> */}
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
        </div>

        <div className="bg-white p-3 container">
          <div className="row">
            {cardItems.map((item, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-12 g-4">
                <div className={`serviceCard-item serviceCard-item-${index + 1} shadow`}>
                  <span className="serviceCard-icon px-2">
                    <img src={item.icon} alt="" width={80} />
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
        <div className="position-relative">
          <Employee />
        </div>

      </div>
    </div>
  );
};

export default Home;