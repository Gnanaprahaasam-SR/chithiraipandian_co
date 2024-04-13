import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AboutUsData from "./AboutUsData";

export function Employee() {
  const teamData = AboutUsData.team;
  const [autoplay, setAutoplay] = useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    const stopAutoplay = () => {
      if (!autoplay) return;
      setAutoplay(false);
    };

    const startAutoplay = () => {
      setAutoplay(true);
    };

    const container = document.querySelector(".slider-container");

    container.addEventListener("mouseover", stopAutoplay);
    container.addEventListener("mouseout", startAutoplay);

    return () => {
      container.removeEventListener("mouseover", stopAutoplay);
      container.removeEventListener("mouseout", startAutoplay);
    };
  }, [autoplay]);

  return (
    <div className="container p-3">
      <div className="slider-container">
        <h1 style={{ textAlign: 'center', color: '#CF9475', fontWeight: 'bold' }}>{teamData.title}</h1>
        <Carousel
          className="mx-3 my-5 team-carosal"
          responsive={responsive}
          swipeable={true}
          autoPlay={autoplay}
          autoPlaySpeed={3000}
          infinite={true}
        >
          {teamData.members.map((member, index) => (
            <div
              className="shadow team-card d-flex flex-column align-items-center"
              key={index}
              onMouseOver={() => setAutoplay(false)}
              onMouseOut={() => setAutoplay(true)}
              onClick={() => setAutoplay(false)}
            >
              <img src={member.image} alt="not found" className="team-member-image" />
              <p className="team-name">{member.name}</p>
              <p className="team-designation text-center">{member.designation}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
};

function AboutUs_OurTeam() {
  const teamData = AboutUsData.team;
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="position-relative">
          <img src={teamData.image} alt="not found" style={{ maxWidth: "100%" }} />
          <h2 className="aboutus-heading">{teamData.title}</h2>
        </div>
      </div>
      <Employee/>
    </div>
  );
}

export default AboutUs_OurTeam;
