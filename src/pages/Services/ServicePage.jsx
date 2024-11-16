import React from 'react';
// import Service from "../../images/service.jpg";
// import { CiCircleCheck } from "react-icons/io5";
import Audit from "../../images/Audit&Assurance.svg";
import Bookkeeper from "../../images/Bookkeeping.png";
import Advisory from "../../images/Advisory.png";
import Indirect from "../../images/IndirectTax.png";
import Secretarial from "../../images/Secretarial1.png";
import DirectTax from "../../images/DirectTax2.png";



const ServicePage = () => {

  return (
    <section className='overflow-hidden'>
      <div className='audit-assurance'>
        <div className='row d-flex flex-sm-row-reverse align-items-center justify-content-center py-3'>
          <div className='col-md-4 col-12 px-4 d-flex justify-content-center'>
            <img src={Audit} alt="Audit_Assurance" width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Audit &  Assurance Service</h2>
              <div className='service-sub-card'>
                <ul className='service-list'>
                  <li>  	Statutory Audit</li>
                  <li>  	Tax Audit</li>
                  <li>  	Internal Audit</li>
                  <li>  	Due Diligence Audit</li>
                  <li>  	Stock Audit</li>
                  <li>  	Bank Audit</li>
                  <li>  	Audit of Insurance Companies</li>
                  <li>	  Management Audit</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr className='mx-5' />

      {/* directTax */}
      <div className='directTax'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-4 col-12 px-4  d-flex justify-content-center'>
            <img src={DirectTax} alt="DirectTax" width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Direct Tax Service</h2>
              <div className='service-sub-card'>
                <div className='service-card-title'>Domestic </div>
                <ul className='service-list'>
                  <li>  Filling of TDS Returns</li>
                  <li>	 Management Audit</li>
                  <li>  Calculation of AMT / MAT</li>
                  <li>  TDS and Income Tax Matter</li>
                  <li>  Dividend Distribution and calculation of Dividend Distribution Tax</li>
                  <li>  Compliance with Transfer Pricing Regulations including documentation</li>
                  <li>  Filling of Income Tax Returns of Corporate and Non Corporate Clients</li>
                  <li>  Tax Compliances which includes, Income Tax Assessments, Appeals before Commissioner (Appeals) and Income tax Appellate Tribunal</li>
                </ul>
                <div className='service-card-title'>International </div>
                <ul className='service-list'>
                  <li>  Transfer Pricing Audit</li>
                  <li>  Representation before Transfer Pricing Authorities</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr className='mx-5' />

      {/* indirectTax */}
      <div className='indirectTax'>
        <div className='row d-flex flex-sm-row-reverse align-items-center justify-content-center'>
          <div className='col-md-4 col-12 p-4 d-flex justify-content-center'>
            <img src={Indirect} alt="IndirectTax" width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Indirect Tax Service</h2>
              <div className='service-sub-card'>
                <div className='service-card-title'>GST</div>
                <ul className='service-list'>
                  <li> GST Compliances</li>
                  <li> GST Audit</li>
                  <li> Filling of Monthly, Quarterly and Annual Returns under GST</li>
                  <li> Filling of GST Returns and refund</li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr className='mx-5' />

      {/* advisory */}
      <div className='advisory'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-4 col-12 px-4  d-flex justify-content-center'>
            <img src={Advisory} alt="Advisory" className='serviceImg' width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Advisory Service</h2>
              <div className='service-sub-card'>
                <ul className='service-list'>
                  <li> 		Preparing Business Plans</li>
                  <li>  	Share Valuation</li>
                  <li>  	Budget and Forecast</li>
                  <li>  	Certification</li>
                  <li>  	Corporate Restructuring</li>
                  <li>  	Conduct a feasibility study of the project</li>
                  <li>  	Consultation for Public Issue Matters</li>
                  <li>  	Wills and Partnership Deeds</li>
                  <li> 		Consultation for Private Equity matters</li>
                  <li>  	Advisory in the Company Law Matters.</li>
                  <li>  	Preparing	application	and	arranging Term loan with Bank</li>
                  <li>  	Personal financial investment planning and family settlement issues</li>
                  <li>  	Preparing	application	and	arranging working capital loan with Bank</li>
                  <li>  	Prepare	a	project	report	along	with liaison with Bank</li>
                  <li>  	Design, Implementation and Review of Accounting manuals</li>
                  <li>  	Advice on various accounting and accounting standard issues including IFRS</li>
                  <li>  	All the advisory in relation to Income tax, VAT, Service Tax, GST, International Taxation.</li>
                  <li>  	Consultation and Advice in matters relating to Business set up and Business structuring of foreign clients.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mx-5' />

      {/* secretarial */}
      <div className='secretarial'>
        <div className='row d-flex flex-sm-row-reverse align-items-center justify-content-center'>
          <div className='col-md-4 col-12 px-4 d-flex justify-content-center'>
            <img src={Secretarial} alt="Secretarial" width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Secretarial</h2>
              <div className='service-sub-card'>
                <div className='service-card-title'>Company Law</div>
                <ul className='service-list'>
                  <li> 	Drafting Memorandum </li>
                  <li> Article of Association of Company</li>
                  <li> 	Conversion from firm to company</li>
                  <li> 	Consultation on Buyback of Shares</li>
                  <li> 	Filling of various Returns with ROC</li>
                  <li> 	Filling of Annual Return in XBRL environment of the company</li>
                  <li> 	Formation of Indian Private / Public / Section 8 Companies / 100% subsidiary / Branch office / Liaison Office/SPV</li>
                  <li> 	Conversion from Private to Public Limited Company and Company into LLP and vice versa</li>

                </ul>
                <div className='service-card-title'>Limited Liability Partnership</div>
                <ul className='service-list'>
                  <li> 	Exit from LLP</li>
                  <li> 	Formation of LLP</li>
                  <li>  Modification in LLP</li>
                  <li> 	Drafting of LLP Agreement</li>
                  <li> 	Conversion of firm into LLP and vice versa</li>
                  <li> 	Filling Annual Return of LLP</li>
                  <li> 	Consultation on Buyback of Shares</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr className='mx-5' />

      {/* bookkeeper */}
      <div className='bookkeeper'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-4 col-12 px-4 d-flex justify-content-center'>
            <img src={Bookkeeper} alt="Bookkeeper" width="100%" />
          </div>
          <div className='col-md-8 col-12 px-md-5 px-4'>
            <div className=' service-card'>
              <h2 className='main-title text-center py-3'>Book keeping Service </h2>
              <div className='service-sub-card'>
                <div className='service-card-description'>We are providing outsourcing services for Domestic as well as international clients, which includes:</div>
                <ul className='service-list'>

                  <li> 	Management reports</li>
                  <li> 	Filing of Statutory Returns</li>
                  <li> 	Accounting supervision</li>
                  <li>	 Preparation of MIS Reports</li>
                  <li>  Accounting record review for past reporting periods</li>
                  <li>  Tax accounting and compliance (income tax, indirect tax and others)</li>
                  <li> 	In-house accounting, compliant with local accounting acts</li>
                  <li> 	Financial statements, compliant with local accounting acts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
