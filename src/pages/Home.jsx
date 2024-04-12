import React, { useState } from "react";
import Content from "./Content";
import timer from "../images/timer.jpg";
import { Carousel } from "react-bootstrap";
import { Employee } from "./AboutUs/AboutUs_OurTeam";


const Home = () => {
  const home = Content.Home;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };


  return (
    <div className="home">
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
              <div className={`carousel-item-content ${activeIndex === 1 ? "active" : "" }`} >
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
        <div className=" row">
          <div className="col-12  col-sm-12 col-md-4 text-start align-content-center text-wrap position-relative ">
            <img src={home?.emergencyCase?.image} alt="timer" width="110%" height="100%" className="container-image" />
            <div className="text-content ">
              <h4>{home?.emergencyCase?.title}</h4>
              <p> {home?.emergencyCase?.description}</p>
              <h5>Call Us Now</h5>
              <h5>{home?.emergencyCase?.contanct}</h5>
            </div>
          </div>
          <div className="col-12  col-sm-12  col-md-4 position-relative">
            <img src={home?.legalHelp?.image} alt="timer" width="110%" height="100%" className="container-image" />
            <div className="text-content ">
              <h4>{home?.legalHelp?.title}</h4>
              <p>{home?.legalHelp?.description}</p>
              <button className="appointment_btn border p-2 ">
                {home?.legalHelp.button} &rarr;
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4 align-content-center position-relative ">
            <img src={home?.workingHour?.image} alt="workingHour" className="container-image" />
            <div className="text-content ">
              <h4> {home?.workingHour?.title}</h4>
              <div className="row align-items-center ">
                <div className="col-6 ">
                  <p className="float-sm-start">{home?.workingHour?.weekdays}</p>
                </div>
                <div className="col-6">
                  <p className=" float-sm-end">{home?.workingHour?.weekdayTiming}</p>
                </div>
              </div>
              <hr style={{ border: "1px solid white" }} />
              <div className="row align-items-center ">
                <div className="col-6">
                  <p className="float-sm-start">{home?.workingHour?.weekend}</p>
                </div>

                <div className="col-6">
                  <p className="float-sm-end">{home?.workingHour?.weekendTiming}</p>
                </div>
              </div>
              <hr style={{ border: "1px solid white" }}  />
              <div className="row align-items-center">
                <div className="col-6">
                  <p className="float-sm-start">{home?.workingHour?.weekoff}</p>
                </div>
                <div className="col-6">
                  <p className="float-sm-end">{home?.workingHour?.weekoffTiming}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee carousel */}
        <Employee/>
      </div>
    </div>
  );
};

export default Home;
