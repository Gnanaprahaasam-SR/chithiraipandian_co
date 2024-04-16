import { Table } from "react-bootstrap";
import { Chart } from "react-google-charts";
import "../../App.css";
import { useState } from "react";

const HRA = () => {

    const [graph, setGraph] = useState(true);

    const handleGraph = () => {
        setGraph(!graph);
    }

    const data = [
        ["Element", "Density", { role: "style" }],
        ["Salary", 0, "#6610f2"], // RGB value
        ["HRA Received", 0, "#6610f2"],
        ["Rent Paid", 0, "#6610f2"],
        ["Exempted", 0, "#6610f2"],
        ["Taxable", 0, "#6610f2"],
    ];

    return (
        <div className='container'>
            <div className='row border m-5' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>HRA Calculator</button>
                </div>
                <Table responsive className="p-5 ">
                    <thead className="align-items-center">
                        <tr>
                            <th>Month</th>
                            <th>Salary</th>
                            <th>HRA Received</th>
                            <th>Rent Paid</th>
                            <th>Exempted</th>
                            <th>Taxable</th>
                            <th>Metro City</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>April:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>May:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>June:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>July:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>August:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>September:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>October:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>November:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>December:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>January:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>February:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>March:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="checkbox" className="form-check-input d-inline" /> </td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td><input type="number" className="form-control d-inline" /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="form-check form-switch ">
                    <h4 className=' align-content-center d-inline'>Graph</h4>
                    <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={handleGraph} />
                </div>
                {graph ? <div className='py-4'>
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                </div> : ""}

            </div>
        </div>
    )
};

export default HRA;