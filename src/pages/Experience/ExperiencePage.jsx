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
        <ul className="list-unstyled" >
          {areas.map((area, index) => (
            <li key={index} className=' my-4' >
              <h2 className='serviceTitle'>{area.title}</h2>
              <ul className="list-unstyled experience-list" style={{ paddingLeft: 0 }}>
                {area.subAreas.map((subArea, subIndex) => (
                  <li className='box' key={subIndex}>
                    <span className='number'>{(subIndex + 1).toString().padStart(2, '0')}</span>
                    <span className='text'>{subArea}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperiencePage;
