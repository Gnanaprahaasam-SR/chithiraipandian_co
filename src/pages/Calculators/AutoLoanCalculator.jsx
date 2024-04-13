import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { Chart } from "react-google-charts";


const AutoLoanCalculator = () => {

    const [beforeTax, setBeforeTax] = useState(0);
    const [gst, setGst] = useState(0);
    const [afterTax, setAfterTax] = useState(0);
    const [rate, setRate] = useState(0);
    const [rebates, setRebates] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [paymentCount, setPaymentCount] = useState(0);
    const [graph, setGraph] = useState(true);

    const data = [
        ["Element", "Density", { role: "style" }],
        ["Instalment Amount", 789, "#6610f2"], // RGB value
        ["Principal", loanAmount, "#6610f2"],
        ["Total Repayment", loanAmount, "#6610f2"]
    ];

    return (
        <div className="container-fluid">
            <div className='row border m-2 mt-5' style={{ backgroundColor: "#F0F0F0", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>Auto Loan Calculator</button>
                </div>

                <Table responsive >
                    <tbody className="align-itmes-center secondary">
                        <tr>
                            <td colspan="2" className="text-end">Payments are made:</td>
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
                            <td className="d-flex justify-content-end " >
                                <p>Total Purchase Price (Before Tax)Rs:</p>
                            </td>
                            <td ><input type="text" className="form-control w-auto" value={beforeTax} onChange={(e) => setBeforeTax(Number(e.target.value))} /></td>
                            <td >
                                <input type='range' min='0' max='1000000' value={beforeTax} onChange={(e) => setBeforeTax(Number(e.target.value))} className='form-range ' />
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-end" >
                                <p  >GST (%):</p></td>
                            <td > <input type="text" className="form-control" value={gst} onChange={(e) => setGst(Number(e.target.value))} /></td>
                            <td>
                                <input type='range' min='0' max='1000000' value={gst} onChange={(e) => setGst(Number(e.target.value))} className='form-range ' />
                            </td>
                        </tr>
                        <tr>
                            <td className=" d-flex justify-content-end" >
                                <p >Total Purchase Price (After Tax):</p>
                            </td>
                            <td colSpan={2}><input type="text" className="form-control w-auto" value={afterTax} onChange={(e) => setAfterTax(Number(e.target.value))} disabled /> </td>
                        </tr>
                        <tr>
                            <td className=" d-flex justify-content-end " >
                                <p>Down Payment or Rebates(Rs.):</p>
                            </td>
                            <td> <input type="text" className="form-control w-auto" value={rebates} onChange={(e) => setRebates(Number(e.target.value))} /></td>
                            <td>
                                <input type='range' min='0' max='1000000' value={rebates} className='form-range ' onChange={(e) => setRebates(Number(e.target.value))} />
                            </td>
                        </tr>
                        <tr>
                            <td className=" d-flex justify-content-end" >
                                <p>Loan Amount:</p>
                            </td>
                            <td colSpan={2}><input type="number" className="form-control w-auto" value={loanAmount} disabled onChange={(e) => setLoanAmount(e.target.value)} /></td>

                        </tr>
                        <tr>
                            <td className=" d-flex justify-content-end" >
                                <p>Interest Rate (p.a.) (%):</p>
                            </td>
                            <td> <input type="type" className="form-control w-auto" value={rate} onChange={(e) => setRate(Number(e.target.value))} /></td>
                            <td>
                                <input type='range' min='0' max='1000000' value={rate} className='form-range ' onChange={(e) => setRate(Number(e.target.value))} />
                            </td>
                        </tr>
                        <tr>
                            <td className=" d-flex justify-content-end" >
                                <p>Number of payments:</p>
                            </td>
                            <td><input type="type" className="form-control w-auto" value={paymentCount} onChange={(e) => setPaymentCount(Number(e.target.value))} /></td>
                            <td>
                                <input type='range' min='0' max='100' value={paymentCount} className='form-range ' onChange={(e) => setPaymentCount(Number(e.target.value))} />
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-end"><p>Auto Payment Installment(Rs.):</p></td>
                            <td colSpan={2}><input type="type" className="form-control w-auto" /> </td>
                        </tr>
                    </tbody>
                </Table>
                <div className=" px-5">
                    <div className="form-check form-switch ">
                        <h4 className=' align-content-center d-inline'>Graph</h4>
                        <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={(e) => setGraph(e.target.value)} />
                    </div>

                    {graph ? <div className='py-4'>
                        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                    </div> : ""}
                </div>
            </div>
        </div>

    )
};

export default AutoLoanCalculator;