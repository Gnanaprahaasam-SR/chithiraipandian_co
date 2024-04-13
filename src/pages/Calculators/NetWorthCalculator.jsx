import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

export default function NetWorthCalculator() {
    const [paidUpShareCapital, setPaidUpShareCapital] = useState(0);
    const [reserves, setReserves] = useState(0);
    const [accumulatedLosses, setAccumulatedLosses] = useState(0);
    const [deferredExpenditure, setDeferredExpenditure] = useState(0);
    const [miscellaneousExpenses, setMiscellaneousExpenses] = useState(0);
    const [showGraph, setShowGraph] = useState(true);

    const initialData = [
        ['Element', 'Amount', { role: 'style' }],
        ['Paid Up Share Capital', 0, '#b87333'],
        ['Reserves', 0, 'silver'],
        ['Accumulated Losses', 0, 'gold'],
        ['Deferred Expenditure', 0, 'color: #e5e4e2'],
        ['Miscellaneous Expenses', 0, 'green']
    ];

    const [chartData, setChartData] = useState(initialData);

    const handlePaidUpShareCapitalChange = (e) => {
        const value = parseInt(e.target.value);
        setPaidUpShareCapital(value);
        updateChartData(1, value);
    };

    const handleReservesChange = (e) => {
        const value = parseInt(e.target.value);
        setReserves(value);
        updateChartData(2, value);
    };

    const handleAccumulatedLossesChange = (e) => {
        const value = parseInt(e.target.value);
        setAccumulatedLosses(value);
        updateChartData(3, value);
    };

    const handleDeferredExpenditureChange = (e) => {
        const value = parseInt(e.target.value);
        setDeferredExpenditure(value);
        updateChartData(4, value);
    };

    const handleMiscellaneousExpensesChange = (e) => {
        const value = parseInt(e.target.value);
        setMiscellaneousExpenses(value);
        updateChartData(5, value);
    };


    const updateChartData = (index, value) => {
        const newData = [...chartData];
        newData[index][1] = value;
        setChartData(newData);
    };

    return (
        <div className='container rounded px-4 mb-5' style={{ borderRadius: "10px" }}>
            <div className='row mt-3'>
                <div className='col-md-12 border mt-5' style={{ backgroundColor: "#F0F0F0", position: 'relative', zIndex: '99' }}>
                    <div className='text-center mb-4' style={{ marginTop: '-20px' }}>
                        <button className='btn btn-primary' style={{ borderRadius: "10px", top: '50%' }}>Net Worth Calculator</button>
                    </div>
                    <div className='mb-3'>
                        <h4 style={{ textAlign: 'center' }}>Net Worth: Rs. </h4>
                    </div>

                    <div className='mt-4'>
                        <div className='row mt-3'>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Paid Up Share Capital:</label>
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
                                    <label className='me-2'>Reserves Out of Profit (including securities premium):</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={reserves}
                                        onChange={handleReservesChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={reserves}
                                        onChange={handleReservesChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='row mt-3 mb-2'>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Accumulated Losses :</label>
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
                                    <label className='me-2'>Deferred Expenditure:</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={deferredExpenditure}
                                        onChange={handleDeferredExpenditureChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={deferredExpenditure}
                                        onChange={handleDeferredExpenditureChange}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 mb-2 d-flex align-items-center justify-content-center'>
                                <div className='col-md-3'>
                                    <label className='me-2'>Miscellaneous Expenses:</label>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-center'>
                                    <input
                                        type='text'
                                        pattern="[0-9]*"
                                        className='form-control mx-2'
                                        value={miscellaneousExpenses}
                                        onChange={handleMiscellaneousExpensesChange}
                                    />
                                    <input
                                        type='range'
                                        min='0'
                                        max='100000'
                                        className='form-range mx-2'
                                        value={miscellaneousExpenses}
                                        onChange={handleMiscellaneousExpensesChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <hr />

                        <div className='col-md-12 border'>
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
                                                        title: 'Net Worth',
                                                        legend: 'none',
                                                        hAxis: { title: 'Amount' },
                                                        colors: ['#b87333', 'silver', 'gold', '#e5e4e2', 'green']
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