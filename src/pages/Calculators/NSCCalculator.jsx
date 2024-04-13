import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Chart } from "react-google-charts";


export default function NSCCalculator() {
    const [certificate, setCertificate] = useState("IX");
    const [amount, setAmount] = useState(0);
    const [interest, setInterest] = useState([]);
    const [cumulativeInterest, setCumulativeInterest] = useState([]);
    const [totalInterest, setTotal] = useState(0);
    const [graph, setGraph] = useState(true);
    const [period, setPeriod] = useState("");
    const [series, setSeries] = useState();

    const handleGraph = () => {
        setGraph(!graph);
    }

    useEffect(() => {
        // Populate interest and cumulativeInterest arrays based on certificate
        if (certificate === 'IX') {
            // For IX issue, generate 10 datasets
            const newInterest = Array.from({ length: 10 }, (_, i) => interest[i] || 0);
            const newCumulativeInterest = Array.from({ length: 10 }, (_, i) => cumulativeInterest[i] || 0);
            setInterest(newInterest);
            setCumulativeInterest(newCumulativeInterest);
            setSeries(10); // Set series value for IX
        } else if (certificate === 'VIII') {
            // For VIII issue, generate 6 datasets
            const newInterest = Array.from({ length: 6 }, (_, i) => interest[i] || 0);
            const newCumulativeInterest = Array.from({ length: 6 }, (_, i) => cumulativeInterest[i] || 0);
            setInterest(newInterest);
            setCumulativeInterest(newCumulativeInterest);
            setSeries(6); // Set series value for VIII
        }
    }, [certificate]);

    const data = [
        ["Month", "Interest", "CumulativeInterest"]
    ];
    const length = certificate === 'IX' ? 10 : 6;
    for (let i = 1; i <= length; i++) {
        data.push([
            `${i}st YearInterest`,
            interest[i - 1] || 0,
            cumulativeInterest[i - 1] || 0
        ]);
    }
    const options = {
        seriesType: "bars",
        series: { [series]: { type: "line" } },
    };


    return (
        <div className='container'>
            <div className='row border m-5' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>Calculate</button>
                </div>

                <form className="px-4 ">
                    <div className='pb-2 d-flex gap-3 align-items-center flex-wrap col-md-4 col-xs-12'>
                        <label htmlFor="certificate" className='d-inline'>Please Select:</label>
                        <select className="form-select d-inline w-100  " id='certificate' name='certificate' onChange={(e) => setCertificate(e.target.value)}>
                            <option Value="IX">National Saving Certificates(IX Issue)</option>
                            <option value="VIII">National Saving Certificates(VIII Issue)</option>
                        </select>
                    </div>
                    <div className='pb-2 d-flex gap-3 align-items-center flex-wrap col-md-4 col-xs-12'>
                        <label htmlFor="amount" className='d-inline'>Investment Amount:</label>
                        <input type="number" name="amount" id="amount" value={amount} className="form-control d-inline w-100" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className='pb-2 d-flex gap-3 align-items-center flex-wrap col-md-4 col-xs-12'>
                        <label htmlFor="period" className='d-inline'>Period of purchase:</label>
                        <select className="form-select d-inline w-100 " id='period' name='period' onChange={(e) => setPeriod(e.target.value)} >
                            <option Value="2011-12">01-12-2011 to 31-03-2012</option>
                            <option value="2012-13">01-04-2012 to 31-03-2013</option>
                            <option value="2013-14">01-04-2013 to 31-03-2014</option>
                            <option value="2014-15">01-04-2014 to 31-03-2015</option>
                        </select>
                    </div>

                    <Table responsive="sm md">
                        <tbody style={{ background: "#F0F0F0 " }}>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Cumulative Interest</td>
                            </tr>
                            {[...Array(certificate === 'VIII' ? 6 : 10)].map((_, index) => (
                                <tr key={index} >
                                    <td>{`${index + 1}st Year Interest:`}</td>
                                    <td><input type="number" value={interest} className="form-control w-auto" disabled /></td>
                                    <td><input type="number" value={interest} className="form-control w-auto" disabled /></td>
                                </tr>
                            ))}
                            <tr>
                                <td>TOTAL INTEREST:</td>
                                <td><input type="number" value={totalInterest} className="form-control w-auto" disabled /></td>
                            </tr>
                            <tr>
                                <td>MATURITY AMOUNT:</td>
                                <td><input type="number" value={totalInterest} className="form-control w-auto" disabled /></td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="form-check form-switch ">
                        <h4 className=' align-content-center d-inline'>Graph</h4>
                        <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={handleGraph} />
                    </div>
                    {graph ? <div className="mb-5">
                        <Chart
                            chartType="ComboChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                        />
                    </div> : ""}

                </form>

            </div>
        </div>

    );
};