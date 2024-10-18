import React from 'react';

import PowerGeneration from "../../images/PowerGeneration.svg";
import Healthcare from "../../images/Healthcare.png";
import TradeRetail from "../../images/Trade-Retail.png";
import HospitalityEntertainment from "../../images/Hospitality-Entertainment.png";
import BankingFinance from "../../images/Banking-Finance.png";
import Education from "../../images/Education.jpg";
import ProfitEntities from "../../images/ProfitEntities.png";
import IT from "../../images/IT-Enable.png";
import Infrastructure from "../../images/Infrastructure.png";
import manufacturing from "../../images/Manufacturing.png"

const ExperiencePage = () => {

  return (
    <div className='overflow-hidden'>
      {/* PowerGeneration */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={PowerGeneration} alt="PowerGeneration" width="90%" />
        </div>
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Power Generation / Transmission / Distribution</h3>
          <p style={{ textAlign: "justify" }}>We provide accounting services to clients across various sectors of power generation, transmission, and distribution. Our expertise covers coal and biomass thermal power plants, hydel run-of-the-river projects, and renewable energy sources like wind and solar. This allows us to cater to a diverse range of energy producers, ensuring tailored financial management for each client's unique operations.</p>
        </div>
      </div>
      <hr className="mx-5" />

      {/* Infrastructure */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Infrastructure</h3>
          <p style={{ textAlign: "justify" }}>We offer accounting services to clients in various infrastructure sectors, including EPC (Engineering, Procurement, and Construction), housing, commercial real estate development and operation, PPP (Public-Private Partnership) annuity and tollways, Metro MRT projects, and airport cargo handling. Our expertise supports the financial management of these diverse infrastructure projects, ensuring accurate and efficient accounting solutions.</p>
        </div>
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={Infrastructure} alt="infrastructure" width="80%" />
        </div>
      </div>
      <hr className="mx-5" />

      {/* Information Technology */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={IT} alt="IT" width="75%" />
        </div>
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Information Technology / IT Enabled / Other Services</h3>
          <p style={{ textAlign: "justify" }}>We provide accounting services to clients in the Information Technology (IT), IT-enabled, and other service sectors, including software development, BPO (Business Process Outsourcing), KPO (Knowledge Process Outsourcing), aircraft MRO (Maintenance, Repair, and Overhaul), design and engineering, and integrated hardware solutions. Our expertise ensures comprehensive financial management for these diverse service industries.</p>
        </div>
      </div>
      <hr className="mx-5" />

      {/* Not for Profit Entities */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Not for Profit Entities</h3>
          <p style={{ textAlign: "justify" }}>We offer accounting services to not-for-profit entities, including those focused on Corporate Social Responsibility (CSR), employee welfare programs, and public charities. Our specialized expertise ensures accurate financial management and compliance tailored to the unique needs of these organizations.</p>
        </div>
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={ProfitEntities} alt="ProfitEntities" width="75%" />
        </div>
      </div>
      <hr className="mx-5" />

      {/* Education */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={Education} alt="education" width="75%" />
        </div>
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Education</h3>
          <p style={{ textAlign: "justify" }}>We provide accounting services to clients in the education sector, including universities, multi-level institutions, engineering institutes, and government institutions. Our expertise ensures efficient financial management and compliance, tailored to the unique needs of educational organizations.</p>
        </div>
      </div>
      <hr className="mx-5" />

      {/* Banking, Finance and Insurance Sectors */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Banking, Finance and Insurance Sectors</h3>
          <p style={{ textAlign: "justify" }}>We offer accounting services to clients in the banking, finance, and insurance sectors, providing comprehensive audit solutions. Our services include statutory audits, internal audits, concurrent audits, revenue audits, credit compliance and monitoring, stock audits, and special audits. We ensure thorough financial oversight and regulatory compliance tailored to the specific needs of these industries.</p>
        </div>
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={BankingFinance} alt="BankingFinace" width="80%" />
        </div>
      </div>
      <hr className="mx-5" />

      {/* Hospitality & Entertainment */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={HospitalityEntertainment} alt="HospitalityEntertainment" width="90%" />
        </div>
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Hospitality & Entertainment</h3>
          <p style={{ textAlign: "justify" }}>We provide accounting services to clients in the hospitality and entertainment sectors, including hotels, sports associations, and multiplexes. Our expertise ensures accurate financial management and compliance, tailored to meet the unique operational needs of these industries.</p>
        </div>
      </div>
      <hr className="mx-5" />

      {/* Healthcare */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Healthcare</h3>
          <p style={{ textAlign: "justify" }}>We offer accounting services to clients in the healthcare sector, including hospitals, clinics, and voluntary service organizations. Our specialized financial management solutions ensure efficient accounting practices and compliance, tailored to the unique needs of healthcare providers and nonprofit health services.</p>
        </div>
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={Healthcare} alt="Healthcare" width="75%" />
        </div>
      </div>
       <hr className="mx-5" />

       {/*Trade / Retail */}
       <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={TradeRetail} alt="Trade&Retail" width="70%" />
        </div>
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Trade / Retail</h3>
          <p style={{ textAlign: "justify" }}>We provide accounting services to clients in the trade and retail sectors, including organized retail, Out-Of-Home (OOH) advertising, and airport duty-free stores. Our expertise ensures precise financial management, tailored to the unique operations and compliance requirements of these industries.</p>
        </div>
      </div>
      <hr className="mx-5" />

      {/* Manufacturing */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-12 px-5 ">
          <h3 className='main-title text-center pb-3'>Manufacturing</h3>
          <p style={{ textAlign: "justify" }}>We offer accounting services to clients in the manufacturing sector, covering a wide range of industries including fertilizers and chemicals, agri-chemicals, agri-automation, seeds, cement, textiles, sugar, solvent extraction, bio-organic products, pharmaceuticals, life sciences, engineering and capital goods, as well as oil and gas. Our specialized financial management solutions are tailored to meet the unique needs and compliance requirements of these diverse manufacturing operations.</p>
        </div>
        <div className="col-md-6 col-12 px-3 px-md-4 d-flex justify-content-center">
          <img src={manufacturing} alt="manufacturing" width="80%" />
        </div>
      </div>
    </div>
  )
}
export default ExperiencePage;



