import React from 'react';
// import Service from "../../images/service.jpg";
// import { CiCircleCheck } from "react-icons/io5";
import Audit from "../../images/Audit&Assurance.png";
import Bookkeeper from "../../images/Bookkeeping.png";
import Advisory from "../../images/Advisory.png";
import Indirect from "../../images/IndirectTax.png";
import Secretarial from "../../images/Secretarial.png";
import DirectTax from "../../images/DirectTax2.png";
import { CiCircleCheck } from 'react-icons/ci';


// const ServicePage = () => {
//   return (
//     <section>
//       <div className='pb-3'>
//         <img src={Service} alt="service" width="100%" />
//       </div>
//       <div className='audit-assurance'>
//         <div className=' container'>
//           <h2 className='main-title'>Audit and Assurance Services: </h2>
//           <p>Our Audit & Assurance services are designed to provide thorough financial oversight and strengthen stakeholder confidence. We offer a comprehensive range of services, including:</p>
//           <ul>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Statutory Audit:</b> Ensuring compliance with regulatory and legal requirements.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Tax Audit:</b> Verifying adherence to tax laws and accuracy in tax filings.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Internal Audit:</b> Evaluating internal controls and risk management processes.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Due Diligence Audit:</b> Assessing financial health and identifying risks in business transactions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Stock Audit:</b> Verifying inventory accuracy and valuation.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Bank Audit:</b> Auditing financial statements and ensuring compliance with banking regulations.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Audit of Insurance Companies:</b> Conducting specialized audits for insurance entities.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Management Audit:</b> Evaluating organizational effectiveness and performance.
//             </p>
//           </ul>

//           <p>Our audit and assurance services help ensure transparency, mitigate risk, and improve operational efficiency for businesses across industries.</p>
//         </div>
//       </div>
//       <div className='directTax'>
//         <div className=' container'>
//           <h2 className='main-title'>Direct Tax Services: </h2>
//           <p>Our direct tax services are tailored to meet the diverse tax needs of both corporate and non-corporate clients, ensuring full compliance and optimal tax strategies. Our services include:</p>
//           <h4 className='main-title'>Domestic Tax Services:</h4>
//           <ul>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Filing of Income Tax Returns </b> for Corporate and Non-Corporate Clients.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Tax Compliance: </b> Handling Income Tax Assessments, Appeals before the Commissioner (Appeals), and representation at the Income Tax Appellate Tribunal.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Filing of TDS Returns: </b> Ensuring timely and accurate submissions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>TDS and Income Tax Matters: </b> Addressing all issues related to Tax Deducted at Source (TDS) and other income tax concerns.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Dividend Distribution Tax (DDT): </b> Calculation and compliance.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>AMT/MAT Calculation: </b> Accurate computation of Alternate Minimum Tax (AMT) and Minimum Alternate Tax (MAT).
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Transfer Pricing Compliance: </b> Comprehensive documentation and adherence to transfer pricing regulations.
//             </p>
//           </ul>
//           <h4 className='main-title'>International Tax Services:</h4>
//           <ul>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Transfer Pricing Audit: </b> Ensuring compliance with transfer pricing regulations through audits.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Representation before Transfer Pricing Authorities: </b>Expert support and representation before authorities.
//             </p>
//           </ul>
//           <p>Our direct tax services are designed to help clients navigate the complexities of tax regulations while optimizing their tax positions and ensuring full legal compliance.</p>
//         </div>
//       </div>
//       <div className='indirectTax'>
//         <div className=' container'>
//           <h2 className='main-title'>Indirect Tax Services:</h2>
//           <p>Our indirect tax services cover a wide range of tax-related matters, helping clients ensure compliance and optimize their tax strategies across various indirect tax regimes. We offer the following services:</p>
//           <ul>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>GST Compliance:</b> Comprehensive support in Goods and Services Tax (GST) registration, filing of GST returns, and ensuring adherence to GST regulations.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>GST Audit:</b> Conducting audits to ensure compliance with GST laws and to identify areas for improvement in tax practices.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>VAT Compliance:</b> Managing Value Added Tax (VAT) filings and related compliance, including for regions where VAT is applicable.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Excise Duty Compliance:</b> Ensuring accurate filing and compliance with excise duty regulations.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Customs Duty:</b> Assistance with customs duty compliance, import-export documentation, and advisory on duty exemptions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Service Tax Compliance:</b> Ensuring adherence to service tax laws where applicable, including legacy issues and compliance with recent regulations.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Indirect Tax Advisory:</b> Providing strategic advice on optimizing tax structure and identifying opportunities for tax savings.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Representation Before Authorities:</b> Expert representation in indirect tax matters before regulatory authorities, including in disputes and appeals.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Indirect Tax Refunds:</b> Assistance in claiming and processing refunds for GST, VAT, and other indirect taxes.
//             </p>
//           </ul>
//           <p>Our indirect tax services are designed to help businesses manage the complexities of tax compliance while minimizing risk and optimizing tax efficiency.</p>
//         </div>
//       </div>
//       <div className='AdvisoryServices'>
//         <div className=' container'>
//           <h2 className='main-title'>Advisory Services:</h2>
//           <p>Our comprehensive advisory services are tailored to help businesses and individuals navigate various financial and strategic challenges. We provide expert guidance in the following areas:</p>
//           <ul>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Business Planning:</b> Assisting in the preparation of detailed business plans.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Share Valuation:</b> Expert valuation services for shares and equity.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Budgeting and Forecasting:</b> Creating accurate financial forecasts and budgets to guide business decisions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Corporate Restructuring:</b> Advising on restructuring strategies for improved efficiency and growth.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Feasibility Studies:</b> Conducting in-depth feasibility studies for new projects and investments.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Public Issue Consultation:</b> Guidance on matters related to public offerings.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Project Reports and Bank Liaison:</b> Preparing comprehensive project reports and facilitating communication with banks.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Private Equity Consultation:</b> Offering advice on private equity matters and transactions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Term Loan and Working Capital Arrangements:</b> Preparing applications and assisting in securing term loans and working capital financing from banks.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Personal Financial Planning:</b> Customized advice on personal financial investments and family settlement matters.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Wills and Partnership Deeds:</b> Assistance in drafting wills and partnership deeds.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Accounting Manual Design and Review:</b> Designing, implementing, and reviewing accounting manuals for organizations.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Certification Services:</b> Offering various certification services for financial and business transactions.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Accounting Standards & IFRS Consultation:</b> Advising on complex accounting issues, including compliance with IFRS and other standards.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Tax Advisory:</b> Comprehensive advisory services in relation to Income Tax, VAT, Service Tax, GST, and International Taxation.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Business Setup and Structuring for Foreign Clients:</b> Offering specialized consultation on business setup and structuring for foreign clients.
//             </p>
//             <p>
//               <CiCircleCheck className='list-icon' />
//               <b className='list-title'>Company Law Matters:</b> Providing expert advice on all matters related to company law.
//             </p>
//           </ul>
//           <p>These advisory services are designed to support businesses and individuals in making informed decisions, optimizing financial performance, and ensuring compliance with regulatory standards.</p>
//         </div>
//       </div>
//       <div className='Secretarial container'>
//         <h2 className='main-title'>Secretarial Services: </h2>

//         <h4 className='main-title'>Company Law Services</h4>
//         <p>Our company law services offer comprehensive support for all aspects of corporate legal compliance and structuring. We assist clients with the following:</p>
//         <ul>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Company Formation:</b> Assistance in the formation of Indian Private, Public, Section 8 Companies, 100% Subsidiaries, Branch Offices, Liaison Offices, and Special Purpose Vehicles (SPVs).
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Drafting Memorandum and Articles of Association:</b> Expert drafting of the company's foundational documents, including the Memorandum and Articles of Association.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Company Conversion:</b> Facilitating the conversion of Private Companies to Public Limited Companies, and vice versa, as well as conversion between Companies and Limited Liability Partnerships (LLP).
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>ROC Filings:</b> Filing various statutory returns and forms with the Registrar of Companies (ROC).
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Annual Return Filing (XBRL):</b> Assisting in the filing of annual returns in the XBRL (Extensible Business Reporting Language) environment.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Firm-to-Company Conversion:</b> Guiding the process of converting a firm into a company structure.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Consultation on Buyback of Shares:</b> Providing expert advice and consultation on share buyback transactions.
//           </p>
//         </ul>
//         <p>These services ensure that businesses are compliant with corporate law requirements and are structured effectively for growth and legal protection.</p>

//         <h4 className='main-title'>Limited Liability Partnership (LLP) Services</h4>
//         <p>We provide a complete range of services to assist with the formation, management, and compliance of Limited Liability Partnerships (LLPs). Our LLP services include:</p>
//         <ul>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Formation of LLP:</b> Assisting in the seamless formation and registration of LLPs.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Drafting of LLP Agreement:</b> Preparing comprehensive LLP agreements that outline the rights, duties, and responsibilities of partners.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Conversion:</b> Facilitating the conversion of a firm into an LLP, and vice versa.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Modification in LLP:</b> Handling changes in the LLP, such as the addition or removal of partners, amendments to the agreement, or changes in capital structure.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Filing Annual Return of LLP:</b> Ensuring timely filing of annual returns and compliance with regulatory requirements.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Exit from LLP:</b> Providing guidance and support for partners exiting the LLP, including the legal and procedural aspects.
//           </p>
//         </ul>
//         <p>Our LLP services ensure that clients remain compliant with legal obligations while maintaining flexibility in managing their partnership structure.</p>
//       </div>
//       <div className='BookkeepingServices container'>
//         <h2 className='main-title'>Bookkeeping Services:</h2>
//         <p>We offer comprehensive bookkeeping outsourcing services tailored for both domestic and international clients. Our services include:</p>
//         <ul>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>In-House Accounting:</b> Providing in-house accounting solutions that comply with local accounting regulations.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Financial Statements:</b> Preparing financial statements in accordance with local accounting standards.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Management Reports:</b> Delivering insightful management reports to aid in decision-making.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Filing of Statutory Returns:</b> Ensuring timely filing of all statutory returns as required by local laws.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Accounting Supervision:</b> Offering supervision and oversight of accounting functions to maintain accuracy and compliance.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Accounting Record Review:</b> Conducting thorough reviews of accounting records for past reporting periods to ensure completeness and correctness.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Tax Accounting and Compliance:</b> Managing tax accounting and compliance, including income tax, indirect taxes, and other relevant tax obligations.
//           </p>
//           <p>
//             <CiCircleCheck className='list-icon' />
//             <b className='list-title'>Preparation of MIS Reports:</b> Preparing Management Information System (MIS) reports to provide valuable insights into business performance.
//           </p>
//         </ul>
//         <p>Our bookkeeping services are designed to enhance operational efficiency, ensure regulatory compliance, and provide valuable financial insights for informed decision-making.</p>
//       </div>

//     </section>
//   )
// }



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
                  <li>  	Filling of TDS Returns</li>
                  <li>	  Management Audit</li>
                  <li>  Calculation of AMT / MAT</li>
                  <li>  	All other matters related to TDS and Income Tax Matter</li>
                  <li>  	Dividend Distribution and calculation of Dividend Distribution Tax</li>
                  <li>  	Compliance with Transfer Pricing Regulations including documentation</li>
                  <li>  	Filling of Income Tax Returns of Corporate and Non Corporate Clients</li>
                  <li>  	Tax Compliances which includes, Income Tax Assessments, Appeals before Commissioner (Appeals) and Income tax Appellate Tribunal</li>
                </ul>
                <div className='service-card-title'>International </div>
                <ul className='service-list'>
                  <li>  	Transfer Pricing Audit</li>
                  <li>  		Representation before Transfer Pricing Authorities</li>
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
                  <li>  	GST Compliances</li>
                  <li>  	GST Audit</li>
                  <li> 	Filling of Monthly, Quarterly and
                    Annual Returns under GST</li>

                  <li>  	Filling of GST Returns and refund</li>

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
                  <li> 	Formation of Indian Private / Public / Section 8 Companies / 100% subsidiary /
                    Branch office / Liaison Office/SPV</li>
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
