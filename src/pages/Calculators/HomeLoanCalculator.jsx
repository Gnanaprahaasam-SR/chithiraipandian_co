import { Chart } from "react-google-charts";
import "../../App.css";
import { useState } from "react";


const HomeLoanCalculator = () => {
    const [graph, setGraph] = useState(true);

    const handleGraph = () => {
        setGraph(!graph);
    }

    const data = [
        ["Element", "Density", { role: "style" }],
        ["Installment Amount", 0, "#6610f2"], // RGB value
        ["Principal", 0, "#6610f2"],
        ["Total repayment", 0, "#6610f2"]
    ];


    return (
        <div className='container'>
            <div className='row border my-5 mx-2' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>Home Loan Calculator</button>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className=" d-flex align-items-center gap-1">
                            <p className=" d-inline">Loan Amount(Rs):</p>
                            <input type="text" name="amount" className=" d-inline form-control" />
                            <input
                                type='range'
                                min='0'
                                max='100000'
                                className='form-range d-inline ms-1'
                            />
                        </div>
                        <div className=" d-flex align-items-center gap-1">
                            <p className="d-inline">Loan Rate(%):</p>
                            <input type="text" name="amount" className="d-inline form-control" />
                            <input
                                type='range'
                                min='0'
                                max='100'
                                className='form-range d-inline'
                            />
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <p className="d-inline">Compound Period:</p>
                            <select className="form-select d-inline w-auto " >
                                <option Value="12">Monthly</option>
                                <option value="4">Quaterly</option>
                                <option value="2">Semi-Annually</option>
                                <option value="1">Annually</option>
                            </select>
                        </div>
                        <div className=" d-flex align-items-center gap-1 ">
                            <p className="d-inline">Amortization Period(in years):</p>
                            <input type="text" name="amount" className=" form-control d-inline" />
                            <input
                                type='range'
                                min='0'
                                max='100'
                                className='form-range d-inline'
                            />
                        </div>
                        <div className=" d-flex align-items-center gap-1">
                            <p className="d-inline">First Payment Date:</p>
                            <input type="text" name="amount" className=" form-control d-inline" />
                            <input
                                type='range'
                                min='0'
                                max='100'
                                className='form-range d-inline'
                            />
                        </div>
                        <div className=" d-flex align-items-center">
                            <p className="d-inline">Payment Frequency:</p>
                            <select className="form-select d-inline w-auto "  >
                                <option Value="12">Monthly</option>
                                <option value="4">Quaterly</option>
                                <option value="2">Semi-Annually</option>
                                <option value="1">Annually</option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center ">
                            <p className="d-inline">Payment:</p>
                            <input type="text" className="form-control w-auto" />
                        </div>
                        <div className=" d-flex align-items-center ">
                            <p className=" d-inline">Extra Payment(Rs):</p>
                            <input type="text" name="amount" className=" d-inline form-control" />
                            <input
                                type='range'
                                min='0'
                                max='100000'
                                className='form-range d-inline ms-1'
                            />
                        </div>

                        <h5 className="text-center">Fully Amortized</h5>

                        <div className=" d-flex align-items-center ">
                            <p className="d-inline">Interest Rate (per payment):</p>
                            <input type="text" className="form-control w-auto" disabled />
                        </div>
                        <div className=" d-flex align-items-center ">
                            <p className="d-inline">Total Payments (Rs):</p>
                            <input type="text" className="form-control d-inline w-auto" disabled />
                        </div>
                        <div className=" d-flex align-items-center ">
                            <p className="d-inline">Total Interest (Rs):</p>
                            <input type="text" className="form-control d-inline w-auto" disabled />
                        </div>
                        <div className=" d-flex align-items-center ">
                            <p className="d-inline">Number of Payments:</p>
                            <input type="text" className="form-control d-inline w-auto" disabled />
                        </div>
                        <div className=" d-flex align-items-center ">
                            <p className="d-inline">Last payment Date:</p>
                            <input type="text" className="form-control d-inline w-auto" disabled />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check form-switch ">
                            <h4 className=' align-content-center d-inline'>Graph</h4>
                            <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={handleGraph} />
                        </div>
                        {graph ? <div className='py-4'>
                            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                        </div> : ""}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeLoanCalculator;