import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import "../../App.css";

export default function EffectiveCapital() {
    const [paidUpShareCapital, setPaidUpShareCapital] = useState(0);
    const [sharePremium, setSharePremium] = useState(0);
    const [reservesSurplus, setReservesSurplus] = useState(0);
    const [longTermLoans, setLongTermLoans] = useState(0);
    const [deposits, setDeposits] = useState(0);
    const [investments, setInvestments] = useState(0);
    const [accumulatedLosses, setAccumulatedLosses] = useState(0);
    const [preliminaryExpenses, setPreliminaryExpenses] = useState(0);
    const [showGraph, setShowGraph] = useState(true);

    const initialData = [
        ['Element', 'Amount', { role: 'style' }],
        ['Paid Share Capital', 0, '#b87333'],
        ['Share Premium', 0, 'silver'],
        ['Reserves & Surplus', 0, 'gold'],
        ['Long Term Loans', 0, 'color: #e5e4e2'],
        ['Deposits', 0, 'green'],
        ['Investments', 0, 'blue'],
        ['Accumulated Losses', 0, 'red'],
        ['Preliminary Expenses', 0, 'orange']
    ];

    const [chartData, setChartData] = useState(initialData);

    const handlePaidUpShareCapitalChange = (e) => {
        const value = parseInt(e.target.value);
        setPaidUpShareCapital(value);
        updateChartData(1, value);
    };

    const handleSharePremiumChange = (e) => {
        const value = parseInt(e.target.value);
        setSharePremium(value);
        updateChartData(2, value);
    };

    const handleReservesSurplusChange = (e) => {
        const value = parseInt(e.target.value);
        setReservesSurplus(value);
        updateChartData(3, value);
    };

    const handleLongTermLoansChange = (e) => {
        const value = parseInt(e.target.value);
        setLongTermLoans(value);
        updateChartData(4, value);
    };

    const handleDepositsChange = (e) => {
        const value = parseInt(e.target.value);
        setDeposits(value);
        updateChartData(5, value);
    };

    const handleInvestmentsChange = (e) => {
        const value = parseInt(e.target.value);
        setInvestments(value);
        updateChartData(6, value);
    };

    const handleAccumulatedLossesChange = (e) => {
        const value = parseInt(e.target.value);
        setAccumulatedLosses(value);
        updateChartData(7, value);
    };

    const handlePreliminaryExpensesChange = (e) => {
        const value = parseInt(e.target.value);
        setPreliminaryExpenses(value);
        updateChartData(8, value);
    };

    const updateChartData = (index, value) => {
        const newData = [...chartData];
        newData[index][1] = value;
        setChartData(newData);
    };

    return (
        <div className='container rounded px-4 mb-5' style={{ borderRadius: "10px" }}>
            <div className='row mt-3'>
                <div className='col-md-12 border mt-5 table_background' style={{  position: 'relative', zIndex: '99' }}>
                    <div className='text-center mb-4' style={{ marginTop: '-20px' }}>
                        <button className='btn btn-primary' style={{ borderRadius: "10px", top: '50%' }}>Effective Capital Calculator</button>
                    </div>
                    <div className='mb-3'>
                        <h4 style={{ textAlign: 'center' }}>Total Effective Capital. Rs.  </h4>
                    </div>

                    <div className='mt-4'>
                        <div className='row mt-3'>
                            <div className='col-md-12'>
                                <h4 >Personal Property:</h4>
                            </div>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Paid Share Capital:</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={paidUpShareCapital}
                                        onChange={handlePaidUpShareCapitalChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={paidUpShareCapital}
                                        onChange={handlePaidUpShareCapitalChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Share Premium (in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={sharePremium}
                                        onChange={handleSharePremiumChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={sharePremium}
                                        onChange={handleSharePremiumChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Reserves & Surplus (excluding revaluation reserves) (in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={reservesSurplus}
                                        onChange={handleReservesSurplusChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={reservesSurplus}
                                        onChange={handleReservesSurplusChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Long Term Loans (in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={longTermLoans}
                                        onChange={handleLongTermLoansChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={longTermLoans}
                                        onChange={handleLongTermLoansChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Deposits(in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={deposits}
                                        onChange={handleDepositsChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={deposits}
                                        onChange={handleDepositsChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='row mt-3 mb-2'>
                            <div className='col-md-12'>
                                <h4>Investments:</h4>
                            </div>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Investments (in Rs.)</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={investments}
                                        onChange={handleInvestmentsChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={investments}
                                        onChange={handleInvestmentsChange}
                                    />
                                </div>
                            </div>

                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Accumulated Losses (in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={accumulatedLosses}
                                        onChange={handleAccumulatedLossesChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={accumulatedLosses}
                                        onChange={handleAccumulatedLossesChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Preliminary Expenses (in Rs.):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={preliminaryExpenses}
                                        onChange={handlePreliminaryExpensesChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={preliminaryExpenses}
                                        onChange={handlePreliminaryExpensesChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <hr />

                        <div className='col-md-12 border mb-3'>
                            <div className='col-md-12 d-flex flex-row mt-3'>
                                <div className='col-md-9 col-sm-9 d-flex align-items-center justify-content-center'>
                                    <h4>Graph</h4>
                                </div>
                                <div className=' col-md-3 col-sm-3 form-check form-switch mb-3'>
                                    <input className='form-check-input' type='checkbox' id='toggleGraph' checked={showGraph} onChange={() => setShowGraph(!showGraph)} />
                                    <label className='form-check-label' htmlFor='toggleGraph'></label>
                                </div>
                            </div>
                            <div className='row'>
                                {showGraph && (
                                    <div className='col-md-12 '>
                                        <div className='row'>
                                            <div className='col-md-12 col-sm-12 d-flex align-items-center justify-content-center'>

                                            </div>
                                            <div className='col-md-12'>
                                                <Chart
                                                    chartType='ColumnChart'
                                                    width='100%'
                                                    height='400px'
                                                    data={chartData}
                                                    options={{
                                                        title: 'Total Effective Capital',
                                                        legend: 'none',
                                                        hAxis: { title: 'Amount' },
                                                        colors: ['#b87333', 'silver', 'gold', '#e5e4e2', 'green', 'blue', 'red', 'orange']
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}