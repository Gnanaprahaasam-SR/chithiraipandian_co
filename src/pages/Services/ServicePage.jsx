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
            <ul className="list-unstyled lists">
              {filteredService.services && filteredService.services.map((subService, subIndex) => (
                <li className='box' key={subIndex}>
                  <span className='number'>{(subIndex + 1).toString().padStart(2, '0')}</span>
                  <span className='text'>{subService}</span>
                </li>
              ))}
              {filteredService.subServices && Object.entries(filteredService.subServices).map(([category, subs], categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <h3 className='serviceTitle'>{category}</h3>
                  {subs.map((subService, subIndex) => (
                    <li className='box' key={subIndex}>
                      <span className='number'>{(subIndex + 1).toString().padStart(2, '0')}</span>
                      <span className='text'>{subService}</span>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
