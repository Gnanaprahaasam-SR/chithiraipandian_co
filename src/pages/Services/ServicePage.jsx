import React from 'react';
import servicesData from './ServiceData';
import { useParams } from 'react-router-dom';

function ServicePage() {
  const { serviceKey } = useParams();
  const filteredService = servicesData.find(service => service.servicesKey === serviceKey);

  if (!filteredService) {
    return <div>No data found for the specified title.</div>;
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col">
          <div className="position-relative">
            <img src={filteredService.imageSrc} alt={filteredService.title} width="100%" />
            <h1 className="centeredH1">{filteredService.title}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <div>
              <h3 className='serviceDescription'>{filteredService?.description?filteredService.description :""}</h3>
            </div>
           
            <div className="list-unstyled lists">
              <div className='row'>
              {filteredService.services && filteredService.services.map((subService, subIndex) => (
                <div className='col-md-6 col-lg-4' key={subIndex}>
                  <div className='services-image-container  my-3'>
                      <img className='services-image' src={filteredService.subImage} alt={filteredService.title} width="100%" />
                  <span className='services-text'>{subService}</span>
                  </div>
                </div>
              ))}
              </div>
              {filteredService.subServices && Object.entries(filteredService.subServices).map(([category, subs], categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <h3 className='serviceTitle'>{category}</h3>
                  <div className='row'>
                  {subs.map((subService, subIndex) => (
                    <div className='col-md-6 col-lg-4' key={subIndex}>
                      <div className='services-image-container my-3'>
                      <img className='services-image' src={filteredService.subImage} alt={filteredService.title} width="100%" />
                      <span className='services-text'>{subService}</span>
                      </div>
                    </div>
                  ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
