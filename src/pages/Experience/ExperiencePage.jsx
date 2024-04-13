import React from 'react';
import experienceData from './ExperienceData';

function ExperiencePage() {
  const { image, 'Our Areas of Expertise': areas } = experienceData.Experience;
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col">
          <div className="position-relative">
            <img src={image} alt="Experience" width="100%" />
            <h1 className="experience-heading">Experience</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row" >
          {areas.map((area, index) => (
            <div key={index} className='col-md-4 my-4' >
              <div className='experience-card shadow'>
              <h2 className='experience-title'>{area.title}</h2>
              <div className="row" style={{ paddingLeft: 0 }}>
                {area.subAreas.map((subArea, subIndex) => (
                  <div className='col-md-12' key={subIndex}>
                    <span className='experience-description'>{subArea}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
