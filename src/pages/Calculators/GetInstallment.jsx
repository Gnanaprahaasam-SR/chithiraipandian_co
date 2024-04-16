import { Chart } from "react-google-charts";
import "../../App.css";
import { useState } from "react";

const Installment = () => {

    const [graph, setGraph] = useState(true);

    const handleGraph = () => {
        setGraph(!graph);
    }

    const data = [
        ["Element", "Density", { role: "style" }],
        ["Installment Amount", 0, "#6610f2"], // RGB value
        ["Principal", 0, "#6610f2"],
        ["Total Repayment", 0, "#6610f2"]
    ];

    return (
        <div className='container'>
            <div className='row border my-5 mx-2' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>Get Number of Installments</button>
                </div>

                <div className="row">
                    <p className="text-center">No. Of Installment:{0}</p>
                    <div className="">
                        <p className="d-inline">Select Installment Type:</p>
                        <select className="form-select d-inline w-auto " >
                            <option Value="12">Monthly Interest</option>
                            <option value="4">Quaterly</option>
                            <option value="2">Half yearly</option>
                            <option value="1">yearly</option>
                        </select>
                    </div>

                    <div className=" d-flex align-items-center gap-1">
                        <p className=" d-inline">Loan Amount:</p>
                        <input type="text" name="amount" className=" d-inline form-control" />
                        <input
                            type='range'
                            min='0'
                            max='100000'
                            className='form-range d-inline ms-1'
                        />
                    </div>
                    <div className=" d-flex align-items-center gap-1">
                        <p className=" d-inline">Installment Amount(Rs):</p>
                        <input type="text" name="amount" className=" d-inline form-control" />
                        <input
                            type='range'
                            min='0'
                            max='100000'
                            className='form-range d-inline ms-1'
                        />
                    </div>
                    <div className=" d-flex align-items-center gap-1">
                        <p className=" d-inline">Interest Rate(P.A):</p>
                        <input type="text" name="amount" className=" d-inline form-control" />
                        <input
                            type='range'
                            min='0'
                            max='100'
                            className='form-range d-inline ms-1'
                        />
                    </div>

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
    )
};

export default Installment;