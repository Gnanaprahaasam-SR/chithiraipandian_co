import React, { useState } from "react";
import Content from "./Content";
import { Carousel } from "react-bootstrap";
import { Employee } from "./AboutUs/AboutUs_OurTeam";


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
          <div className="col-12  col-sm-12  col-md-4 p-5 ">
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

        {/* Employee carousel */}
        <div className="position-absoulte">
          <Employee />
        </div>

      </div>
    </div>
  );
};

export default Home;