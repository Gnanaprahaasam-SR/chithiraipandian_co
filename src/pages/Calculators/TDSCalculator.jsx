import React, { useEffect, useState } from 'react';

export default function TDSCalculator() {
  const [section, setSection] = useState("");
  const [pan, setPanQuote] = useState(true);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [recipientType, setRecipientType] = useState("individualHUFSOLEPROP");
  const [TDS, setTDS] = useState(0);

  console.log(pan, section, rate, amount, recipientType)
  useEffect(() => {
    const calculateTDS = () => {
      switch (section) {
        case "192A":
          if (pan && amount >= 50000) {
            FinalCalculation(10, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "193":
          if (pan && amount >= 10000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 10000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194":
          if (pan && amount >= 5000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 5000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194A(other bank)":
          if (pan && amount >= 5000) {
            FinalCalculation(10, amount);
          } if (!pan && amount >= 5000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194A":
          if (pan && amount >= 40000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 40000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194B":
          if (pan && amount >= 10000) {
            FinalCalculation(30, amount);
          } else if (!pan && amount >= 10000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194BB":
          if (pan && amount >= 10000) {
            FinalCalculation(30, amount);
          } else if (!pan && amount >= 10000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194C(single payment)":
          if (pan && amount >= 30000) {
            if (recipientType === "individualHUFSOLEPROP") { FinalCalculation(1, amount) } else { FinalCalculation(2, amount) };
          } else if (!pan && amount >= 30000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194C(aggregate bill)":
          if (pan && amount >= 100000) {
            if (recipientType === "individualHUFSOLEPROP") { FinalCalculation(1, amount) }
            else { FinalCalculation(2, amount) };
          } else if (!pan && amount >= 100000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194D":
          if (pan && amount >= 15000) {
            if (recipientType === "individualHUFSOLEPROP") { FinalCalculation(5, amount) }
            else { FinalCalculation(10, amount) };
          } else if (!pan && amount >= 15000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194DA":
          if (pan && amount >= 1000000) {
            FinalCalculation(5, amount);
          } else if (!pan && amount >= 1000000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194H":
          if (pan && amount >= 15000) {
            FinalCalculation(5, amount);
          } else if (!pan && amount >= 15000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194I(a)":
          if (pan && amount >= 240000) {
            FinalCalculation(2, amount);
          } else if (!pan && amount >= 240000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194I(b)":
          if (pan && amount >= 240000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 240000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194IA":
          if (pan && amount >= 5000000) {
            FinalCalculation(1, amount);
          } else if (!pan && amount >= 5000000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194IB":
          if (pan && amount >= 50000) {
            FinalCalculation(5, amount);
          } else if (!pan && amount >= 50000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194J(all cases)":
          if (pan && amount >= 30000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 30000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194J":
          if (pan && amount >= 30000) {
            FinalCalculation(2, amount);
          } else if (!pan && amount >= 30000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194K":
          if (pan && amount >= 5000) {
            FinalCalculation(10, amount);
          } else if (!pan && amount >= 5000) {
            FinalCalculation(20, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        case "194O":
          if (pan && amount >= 500000) {
            FinalCalculation(1, amount);
          } else if (!pan && amount >= 500000) {
            FinalCalculation(5, amount);
          } else {
            setRate(0);
            setTDS(0);
          }
          break;
        default:
          setTDS(0);
      }
    };

    calculateTDS();
  }, [section, pan, amount, recipientType]);

  const FinalCalculation = (Rate, Amount) => {
    const final = Amount * (Rate / 100);
    setRate(Rate);
    setTDS(final);
  };

  return (
    <div className='container  mb-5' >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='row border mt-5 table_background py-4 col-md-8' >
          <div className='calculator-heading' >
            TDS Calculator
          </div>
          <div className='row mt-3'>
            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='d-flex flex-column align-items-left'>
                <label>Section</label>
                <select className='form-select  form-control' onChange={(e) => setSection(e.target.value)}>
                  <option>Select</option>
                  <option value="192A">Section 192A - Payment of accumulated PF balance to an employee</option>
                  <option value="193">Section 193 - Interest on Securities</option>
                  <option value="194">Section 194 - Dividend other than the Dividend as referred to in Section 115-O</option>
                  <option value="194A(other bank)">Section 194A - Interest other than Banks</option>
                  <option value="194A">Section 194A - Interest from Banks</option>
                  <option value="194B">Section 194B - Winnings from Lotteries, crossword Puzzles etc.</option>
                  <option value="194BB">Section 194BB - Income by way of Winnings from Horse Races</option>
                  <option value="194C(single payment)">Section 194C - Payment to Contractor/Sub-Contractor (In case of single payment)</option>
                  <option value="194C">Section 194C - Payment to Contractor/Sub-Contractor (In case of during F.Y)</option>
                  <option value="194D">Section 194D - TDS on insurance commission</option>
                  <option value="194DA">Section 194DA - TDS on Payment in Respect of Life Insurance Policy</option>
                  <option value="194H">Section 194H - Commission or Brokerage</option>
                  <option value="194I(a)">Section 194I(a) - Rent on Plant & Machinery</option>
                  <option value="194I(b)">Section 194I(b) - Rent on Land & building or Furniture & Fitting</option>
                  <option value="194IA">Section 194IA - Payment on transfer of certain Immovable Property other than agricultural Land</option>
                  <option value="194IB">Section 194IB - Rent Payment to Landlord by Individuals</option>
                  <option value="194J(all cases)">Section 194J - Fees for Professional Services/Royalty etc. (Normally in all cases)</option>
                  <option value="194J">Section 194J - Fees for technical services, Fees to Call centre operator</option>
                  <option value="194K">Section 194K - TDS on income from mutual fund units (Dividend income)</option>
                  <option value="194O">Section 194O - TDS on Payment by E-commerce Operator to E-commerce participant.</option>
                </select>
              </div>
            </div>

            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='d-flex flex-column align-items-left'>
                <label >PAN quoted by deductee</label>
                <select className='form-select' style={{ display: 'inline-block', width: 'auto' }} onChange={(e) => setPanQuote(e.target.value === "true")}>
                  <option value="true" >Yes</option>
                  <option value="false" >No</option>
                </select>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='d-flex flex-column align-items-left gap-2 '>
                <label>Recipient Type:</label>
                <div className='gap-2 d-flex flex-nowrap'>
                  <input
                    type="radio"
                    id="individualHUFSOLEPROP"
                    name="recipientType"
                    value="individualHUFSOLEPROP"
                    className="form-check-input"
                    checked={recipientType === "individualHUFSOLEPROP"}
                    onChange={(e) => setRecipientType(e.target.value)}
                  />
                  <label htmlFor="individualHUFSOLEPROP"> Individual/HUF/Sole Proprietor</label>
                </div>
                <div className='gap-2 d-flex flex-nowrap'>
                  <input
                    type="radio"
                    id="other"
                    name="recipientType"
                    value="other"
                    className="form-check-input"
                    checked={recipientType === "other"}
                    onChange={(e) => setRecipientType(e.target.value)}
                  />
                  <label htmlFor="other"> Other</label>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='d-flex flex-column align-items-left'>
                <label className='me-2'>Rate: {`${rate}%`} </label>
                <input type='range' min='0' max='100' value={rate} onChange={(e) => setRate(parseInt(e.target.value, 10))} className='form-range ' />

              </div>
            </div>


            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='d-flex flex-column align-items-left'>
                <label className='me-2'>Amount: {`${amount}`}</label>
                <input type='range' min='0' max='100000' value={amount} onChange={(e) => setAmount(parseInt(e.target.value, 10))} className='form-range ' />
              </div>
            </div>

            <div className='col-md-6 col-sm-12 mb-3' >
              <div className=' d-flex flex-column align-items-left'>
                <label className='me-2'>Tax:  {`${TDS}`}</label>
              </div>
              {!pan ? <span>In case Pan is not available TDS will be applicable at higher rates</span> : ""}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
