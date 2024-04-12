import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

export default function EMICalculator() {
    const [installmentType, setinstallmentType] = useState(1);
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [installment, setInstallment] = useState(0);
    const [installmentAmount, setInstallmentAmount] = useState(0);
    const [graph, setGraph] = useState(true);
    const [interest, setinterset] = useState(0);
    const [monthlyInterestRate, setMonthlyInterest] = useState(0);

    console.log(installmentType, rate, amount, installment, installmentAmount, interest)


    useEffect(() => {
        const monthlyInterestRate = rate / installmentType / 100;
        setMonthlyInterest(monthlyInterestRate);
    }, [rate, installmentType]);

    useEffect(() => {
        let totalAmount = amount * (Math.pow(1 + monthlyInterestRate, installment) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, installment));

        setinterset(totalAmount - amount);
    }, [monthlyInterestRate, installment, amount])

    useEffect(() => {
        const calculateTotalAmount = () => {
            const total = (amount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, installment) / (Math.pow(1 + monthlyInterestRate, installment) - 1)));
            setInstallmentAmount(total);
        };
        calculateTotalAmount();
    }, [monthlyInterestRate, amount, installment]);

    const handleRate = (event) => {
        setRate(event.target.value);
    };

    const handleAmount = (event) => {
        setAmount(event.target.value);
    };

    const handleinstallment = (event) => {
        setInstallment(event.target.value);
    };
    const handleinstallmentType = (event) => {
        setinstallmentType(event.target.value);
    };

    const handleGraph = () => {
        setGraph(!graph);
    }

    const data = [
        ["Element", "Density", { role: "style" }],
        ["installment Amount", installmentAmount, "#6610f2"], // RGB value
        ["Principal", amount, "#6610f2"],
        [`Principal:Rs${amount} + Interest:Rs${interest}=`, amount + interest, "#6610f2"]
    ];


    return (
        <div className='container'>
            <div className='row border m-5' style={{ backgroundColor: "#F0F0F0", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>EMI Calculator</button>
                </div>
                <div className='calculator '>
                    <h5 className='text-center py-2'>installment Amount: Rs.{installmentAmount}</h5>
                    <form className='px-2'>
                        <div className='col-md-6 offset-lg-3'>
                            <div className='pb-2 d-flex gap-3 align-items-center flex-wrap'>
                                <label htmlFor="installment_type" className='d-inline'>Select installment Type:</label>
                                <select className="form-select d-inline w-100 " id='installment_type' name='installmentType' onChange={handleinstallmentType}>
                                    <option Value="12">Monthly Interest</option>
                                    <option value="4">Quaterly</option>
                                    <option value="2">Half yearly</option>
                                    <option value="1">Yearly</option>
                                </select>
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap'>
                                <label htmlFor="loanAmount d-inline">Loan Amount:</label>
                                <input type="number" value={amount} onChange={handleAmount} name='amount' className='form-control w-100 d-inline' />
                                <input type='range' min='0' max='100000' value={amount} onChange={handleAmount} className='form-range  d-inline' />
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap '>
                                <label htmlFor="installment" className='d-inline'>No. of installment:</label>
                                <input type="number" value={installment} onChange={handleinstallment} name='installment' className='form-control w-100 d-inline' id='installment' />
                                <input type='range' min='0' max='500' value={installment} onChange={handleinstallment} className='form-range d-inline' />
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap '>
                                <label htmlFor="rate" className='d-inline'>Interest Rate(P.A):</label>
                                <input type="number" value={rate} onChange={handleRate} name='rate' className='form-control w-100 d-inline' id='rate' />
                                <input type='range' min='0' max='100' value={rate} onChange={handleRate} className='form-range d-inline ' />
                            </div>
                        </div>
                        <div className="form-check form-switch ">
                            <h4 className=' align-content-center d-inline'>Graph</h4>
                            <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={handleGraph} />
                        </div>

                        {graph ? <div className='py-4'>
                            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                        </div> : ""}

                    </form>
                </div>
            </div>
        </div>


    );
};
