import React, { useState } from 'react';

export default function TDSCalculator() {
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleRateChange = (e) => {
    const newRate = parseInt(e.target.value, 10);
    setRate(newRate);
  };

  const handleAmountChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    setAmount(newAmount);
  };

  return (
    <div className='container rounded px-4 mb-5' style={{ borderRadius: "10px" }}>
      <div className='row mt-3'>
        <div className='col-md-12 border mt-5' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: 'relative', zIndex: '99' }}>
          <div className='text-center mb-4' style={{ marginTop: '-20px' }}>
            <button className='btn btn-primary' style={{ borderRadius: "10px", top: '50%' }}>TDS Calculator</button>
          </div>

          <div className='row mt-3'>
            <div className='col-md-9'>
              <label>Section</label>
              <select className='form-select mx-4 form-control' style={{ width: "60%" }}>
                <option>Select</option>
              </select>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-9'>
              <label className='me-2' style={{ display: 'inline-block' }}>PAN quoted by deductee</label>
              <select className='form-select' style={{ display: 'inline-block', width: 'auto' }}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-9 d-flex align-items-center'>
              <label className='me-2'>Rate</label>
              <input type='text' value={`${rate}%`} onChange={handleRateChange} className='form-control mx-2' />
              <input type='range' min='0' max='100' value={rate} onChange={handleRateChange} className='form-range mx-2' style={{ color: "black" }} />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-9 d-flex align-items-center'>
              <label className='me-2'>Amount</label>
              <input type='text' value={`${amount}`} onChange={handleAmountChange} className='form-control mx-2' />
              <input type='range' min='0' max='100000' value={amount} onChange={handleAmountChange} className='form-range mx-2' />
            </div>
          </div>
          <hr className='mt-4' style={{ width: "100%" }} />

          {/* Added div for background color */}
          <div className='row mt-3' style={{ padding: '10px' }}>
            <div className='col-md-9 d-flex align-items-center'>
              <label className='me-2'>Tax</label>
              <input type='text' className='form-control mx-2' readOnly style={{ width: '100px' }} />
            </div>
          </div>
          <hr className='mt-4' style={{ width: "100%" }} />
          
        </div>

      </div>
    </div>
  );
}