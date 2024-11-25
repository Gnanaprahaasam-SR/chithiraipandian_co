
// import Service from "../../images/service.jpg";
import Audit_And_Assurenece from "../../images/Audit_And_Assurenece.jpg";
// import Direct_Tax from "../../images/Direct_Tax.jpg";
// import Indirect_Tax from "../../images/Indirect_Tax.jpg";
import Advisory from "../../images/Advisory.jpg";
// import Secretarial from "../../images/Secretarial.jpg";
import Bookkeeping from "../../images/Bookkeeping.jpg";



const servicesData = [
  {
    title: "Audit & Assurance Services",
    // imageSrc: Service,
    servicesKey: "auditAndAssuranceServices",
    subImage:Audit_And_Assurenece,
    services: [
      "Statutory Audit",
      "Tax Audit",
      "Internal Audit",
      "Due Diligence Audit",
      "Stock Audit",
      "Bank Audit",
      "Audit of Insurance Companies",
      "Management Audit"
    ]
  },
  {
    title: "Direct Tax Services",
    // imageSrc: Service,
    servicesKey: "directTaxServices",
    // subImage:Direct_Tax,
    subServices: {
      Domestic: [
        "Filling of Income Tax Returns of Corporate and Non-Corporate Clients",
        "Tax Compliances including Income Tax Assessments, Appeals before Commissioner (Appeals) and Income tax Appellate Tribunal",
        "Filling of TDS Returns",
        "All other matters related to TDS and Income Tax Matter",
        "Dividend Distribution and calculation of Dividend Distribution Tax",
        "Calculation of AMT / MAT",
        "Compliance with Transfer Pricing Regulations including documentation"
      ],
      International: [
        "Transfer Pricing Audit",
        "Representation before Transfer Pricing Authorities"
      ]
    }
  },
  {
    title: "Indirect Tax Services",
    // imageSrc: Service,
    servicesKey: "indirectTaxServices",
    // subImage:Indirect_Tax,
    subServices: {GST:[
      "Filling of Monthly, Quarterly and Annual Returns under GST",
      "GST Compliances",
      "Filling of GST Returns and refund",
      "GST Audit"
    ]}
  },
  {
    title: "Advisory Services",
    // imageSrc: Service,
    servicesKey: "advisoryServices",
    subImage:Advisory,
    services: [
      "Preparing Business Plan",
      "Budget and Forecast",
      "Conducting a feasibility study of the project",
      "Prepare a project report along with liaison with the bank",
      "Preparing application and arranging working capital loan with the bank",
      "Design, Implementation, and Review of Accounting Manuals",
      "Advise on various accounting and accounting standard issues including IFRS",
      "Consultation and advice in matters relating to Business set up and Business",
      "Share Valuation",
      "Corporate Restructuring",
      "Consultation for Public Issue Matters",
      "Consultation for Private Equity Matters",
      "Personal financial investment planning and final settlement issues",
      "Wills and Partnership Deeds",
      "Certification",
      "All the advisory in relation to Income tax, VAT, Service Tax, GST, International Taxation"
    ]
  },
  {
    title: "Secretarial",
    // imageSrc: Service,
    servicesKey: "secretarial",
    // subImage:Secretarial,
    services: [
      "Formation of Indian Private / Public/ Section & Companies/100% Subsidiary/ Branch Office/ Liaison Office/SPV.",
      "Drafting Memorandum and Article of Association of Company.",
      "Conversion from Private to Public limited company and company into LLP and Vice Versa.",
      "Filling of various returns with ROC",
      "Modification in LLP.",
      "Filling and Annual return of LLP.",
      "Exit from LLP.",
      "Filling of Annual Return in XBRL environment of the company.",
      "Conversion from Firm to Company.",
      "Consultation on Buyback of shares.",
      "Formation of LLP.",
      "Drafting of LLP Agreement.",
      "Conversion of firm into LLP and Vice Versa"
    ]
  },
  {
    title: "Bookkeeping Services",
    // imageSrc: Service,
    servicesKey: "bookkeepingServices",
    subImage:Bookkeeping,
    description:"We are providing outsourcing services for domestic as international clients, which includes:",
    services: [
      "In-house accounting, compliant with local accounting acts.",
      "Financial Statements, compliant with local accounting arts.",
      "Management reports.",
      "Filling of statutory returns.",
      "Accounting supervision.",
      "Accounting record review for past reporting periods.",
      "Tax accounting and compliance (Income Tax, indirect tax and others).",
      "Preparation of MIS reports."
    ]
  }
];

export default servicesData;
