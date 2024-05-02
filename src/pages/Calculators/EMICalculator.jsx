import React, { useEffect, useState } from 'react';
import "../../App.css";
import { BarChart } from '@mui/x-charts/BarChart';

export default function EMICalculator() {
    const [installmentType, setinstallmentType] = useState('monthly');
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [installment, setInstallment] = useState(0);
    const [emi, setEmi] = useState(0);
    const [graph, setGraph] = useState(true);
    const [interest, setInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const monthlyRate = rate / (12 * 100);
        let adjustedTime;
        switch (installmentType) {
            case 'monthly':
                adjustedTime = installment / 12;
                break;
            case 'quarterly':
                adjustedTime = installment / 4;
                break;
            case 'half-yearly':
                adjustedTime = installment / 2;
                break;
            case 'yearly':
                adjustedTime = installment;
                break;
            default:
                throw new Error('Invalid frequency');
        }

        const totalEMIs = adjustedTime * 12;
        const denominator = Math.pow((1 + monthlyRate), totalEMIs) - 1;
        const emi = amount * monthlyRate * Math.pow((1 + monthlyRate), totalEMIs) / denominator;
        if (emi > 0) {
            setEmi(emi.toFixed(0));
        }

        let remainingPrincipal = amount;
        let totalInterest = 0;

        for (let i = 0; i < totalEMIs; i++) {
            const interest = remainingPrincipal * monthlyRate;
            totalInterest += interest;
            remainingPrincipal -= emi - interest;
        }
        if (totalInterest > 0) {
            setInterest(totalInterest.toFixed(0))
            const totalAmount = Number(totalInterest.toFixed(0)) + Number(amount);
            setTotalAmount(totalAmount);
        }
        
    }, [rate, installmentType, installment, amount]);

    const handleGraph = () => {
        setGraph(!graph);
    }


    return (
        <div className='container'>
            <div className='row border m-5' style={{ background: "linear-gradient(rgb(152, 189, 223),rgb(134, 209, 134))", position: "relative", zIndex: "99" }}>
                <div className='col-12 text-center mb-4' style={{ marginTop: '-20px' }}>
                    <button className='btn btn-primary'>EMI Calculator</button>
                </div>
                <div className='calculator '>
                    <h5 className='text-center py-2'>Installment Amount: Rs.{emi}</h5>
                    <form className='px-2'>
                        <div className='col-md-6 offset-lg-3'>
                            <div className='pb-2 d-flex gap-3 align-items-center flex-wrap'>
                                <label htmlFor="installment_type" className='d-inline'>Select installment Type:</label>
                                <select className="form-select d-inline w-100 " id='installment_type' name='installmentType' onChange={(e) => setinstallmentType(e.target.value)}>
                                    <option value="monthly">Monthly Interest</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="half-yearly">Half yearly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap'>
                                <label htmlFor="loanAmount d-inline">Loan Amount:</label>
                                <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} name='amount' className='form-control w-100 d-inline' />
                                <input type='range' min='0' max='5000000' value={amount} onChange={(e) => setAmount(Number(e.target.value))} className='form-range  d-inline' />
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap '>
                                <label htmlFor="installment" className='d-inline'>No. of installment:</label>
                                <input type="text" value={installment} onChange={(e) => setInstallment(Number(e.target.value))} name='installment' className='form-control w-100 d-inline' id='installment' />
                                <input type='range' min='0' max='500' value={installment} onChange={(e) => setInstallment(Number(e.target.value))} className='form-range d-inline' />
                            </div>
                            <div className='pb-2 d-flex align-items-center flex-wrap '>
                                <label htmlFor="rate" className='d-inline'>Interest Rate(P.A):</label>
                                <input type="text" value={rate} onChange={(e) => setRate(Number(e.target.value))} name='rate' className='form-control w-100 d-inline' id='rate' />
                                <input type='range' min='0' max='100' value={rate} onChange={(e) => setRate(Number(e.target.value))} className='form-range d-inline ' />
                            </div>
                        </div>
                        <div className="form-check form-switch ">
                            <h4 className=' align-content-center d-inline'>Graph</h4>
                            <input className="form-check-input d-inline float-end" type="checkbox" id="flexSwitchCheckDefault" checked={graph} onChange={handleGraph} />
                        </div>

                        {graph ? <div >
                            <BarChart
                                series={[
                                    { data: [emi, amount, totalAmount] },
                                ]}

                                height={300}
                                xAxis={[{ data: ['Installment Amount', 'Principal', `Principal:Rs${amount} + Interest:Rs${interest}`,], scaleType: 'band' }]}
                                sx={{padding:"2%"}}
                            />
                        </div> : null}

                    </form>
                </div>
            </div>
        </div>


    );
};
