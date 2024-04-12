import { useState } from "react";


const AutoLoanCalculator = () => {

    const [beforeTax, setBeforeTax] = useState(0);
    const [gst, setGst] = useState(0);
    const [afterTax, setAfterTax] = useState(0);
    const [rate, setRate] = useState(0);
    const [rebates, setRebates] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [paymentCount, setPaymentCount] = useState(0);

    return (
        <div className="container">
            <div className='row border m-5' style={{ backgroundColor: "#F0F0F0", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>Auto Loan Calculator</button>
                </div>
                <div className="table-responsive-sm table-responsive-md">
                    <table className=" secondary  d-flex justify-content-center">
                        <tbody>
                            <tr>
                                <td className="text-end">Payments are made:</td>
                                <td className="text-center">
                                    <select className="form-select w-auto text-center" id='payment' name='payment' >
                                        <option Value="12">Monthly Interest</option>
                                        <option value="4">Quaterly</option>
                                        <option value="2">Half yearly</option>
                                        <option value="1">Yearly</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex justify-content-end" >
                                    <p className="  " >Total Purchase Price (Before Tax)Rs:</p>
                                    <input type="text" className="form-control w-auto" value={beforeTax} />
                                </td>
                                <td >
                                    <input type='range' min='0' max='1000000' value={beforeTax} className='form-range ' />
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex justify-content-end" >
                                    <p className="" >GST (%):</p>
                                    <input type="text" className="form-control w-auto" value={gst} />
                                </td>
                                <td>
                                    <input type='range' min='0' max='1000000' value={gst} className='form-range ' />
                                </td>
                            </tr>
                            <tr>
                                <td className=" d-flex justify-content-end" >
                                    <p className=" d-inline" >Total Purchase Price (After Tax):</p>
                                    <input type="text" className="form-control w-auto" value={afterTax} disabled />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className=" d-flex justify-content-end  " >
                                    <p className=" d-inline" >Down Payment or Rebates(Rs.):</p>
                                    <input type="text" className="form-control w-auto" value={rebates} />
                                </td>
                                <td>
                                    <input type='range' min='0' max='1000000' value={rebates} className='form-range ' />
                                </td>
                            </tr>
                            <tr>
                                <td className=" d-flex justify-content-end" >
                                    <p className=" d-inline" >Loan Amount:</p>
                                    <input type="number" className="form-control w-auto" value={loanAmount} disabled />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className=" d-flex justify-content-end" >
                                    <p className=" d-inline" >Interest Rate (p.a.) (%):</p>
                                    <input type="type" className="form-control w-auto" value={rate} />
                                </td>
                                <td>
                                    <input type='range' min='0' max='1000000' value={rate} className='form-range ' />
                                </td>
                            </tr>
                            <tr>
                                <td className=" d-flex justify-content-end text-center" >
                                    <p className=" d-inline" >Number of payments:</p>
                                    <input type="type" className="form-control w-auto" value={paymentCount} />
                                </td>
                                <td>
                                    <input type='range' min='0' max='100' value={paymentCount} className='form-range ' />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
};

export default AutoLoanCalculator;