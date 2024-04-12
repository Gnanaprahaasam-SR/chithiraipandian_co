import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
 
export default function GSTCalculator() {
    const [rows, setRows] = useState([
        { id: 1, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' },
        { id: 2, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' },
        { id: 3, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' },
        { id: 4, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' },
        { id: 5, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' },
        { id: 6, typeOfSale: '', rateOfTax: '', taxableAmount: '', igst: '', cgst: '', sgst: '', totalTaxAmount: '', rateOfCess: '', cess: '' }
    ]);
 
    const handleTypeOfSaleChange = (id, event) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, typeOfSale: event.target.value } : row
        );
        setRows(updatedRows);
    };
 
    const handleRateOfTaxChange = (id, event) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, rateOfTax: event.target.value } : row
        );
        setRows(updatedRows);
    };
 
    const handleTaxableAmountChange = (id, event) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, taxableAmount: event.target.value } : row
        );
        setRows(updatedRows);
    };
 
    const handleRateOfCessChange = (id, event) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, rateOfCess: event.target.value } : row
        );
        setRows(updatedRows);
    };
 
    const calculateTax = (row) => {
        if (row.typeOfSale === 'inter') {
            const igstValue = (parseFloat(row.rateOfTax) * parseFloat(row.taxableAmount)) / 100;
            return { ...row, igst: igstValue.toFixed(2), totalTaxAmount: igstValue.toFixed(2), cgst: '', sgst: '' };
        } else if (row.typeOfSale === 'intra') {
            const cgstValue = (parseFloat(row.rateOfTax) / 2) * parseFloat(row.taxableAmount) / 100;
            const sgstValue = cgstValue;
            const totalTax = cgstValue * 2;
            return { ...row, cgst: cgstValue.toFixed(2), sgst: sgstValue.toFixed(2), totalTaxAmount: totalTax.toFixed(2), igst: '' };
        }
        return row;
    };
 
    const calculateCess = (row) => {
        const cessValue = (parseFloat(row.rateOfCess) * parseFloat(row.taxableAmount)) / 100;
        return { ...row, cess: parseFloat(cessValue.toFixed(2)) };
    };
 
    const handleReset = () => {
        // Reset all rows to initial state
        const initialRows = Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            typeOfSale: '',
            rateOfTax: '',
            taxableAmount: '',
            igst: '',
            cgst: '',
            sgst: '',
            totalTaxAmount: '',
            rateOfCess: '',
            cess: ''
        }));
        setRows(initialRows);
    };
 
    useEffect(() => {
        const updatedRows = rows.map(row => {
            const rowWithTax = calculateTax(row);
            return calculateCess(rowWithTax);
        });
        setRows(updatedRows);
    }, [rows]); // Recalculate whenever rows change
 
    // Calculate totals
    const totalTaxableAmount = rows.reduce((acc, row) => acc + parseFloat(row.taxableAmount || 0), 0);
    const totalTotalTaxAmount = rows.reduce((acc, row) => acc + parseFloat(row.totalTaxAmount || 0), 0);
    const totalIGST = rows.reduce((acc, row) => acc + parseFloat(row.igst || 0), 0);
    const totalCGST = rows.reduce((acc, row) => acc + parseFloat(row.cgst || 0), 0);
    const totalSGST = rows.reduce((acc, row) => acc + parseFloat(row.sgst || 0), 0);
    const totalCESS = rows.reduce((acc, row) => acc + parseFloat(row.cess || 0), 0);
 
    return (
        <div className='container rounded px-4 mb-4' style={{ borderRadius: "10px" }}>
            <div className='row mt-3' >
                <div className='col-md-12 border mt-5' style={{ backgroundColor: "#e2e3e5", position: 'relative', zIndex: '99' }}>
                    <div className='text-center mb-4' style={{ marginTop: '-20px' }}>
                        <button className='btn btn-primary' style={{ borderRadius: "10px", top: '50%' }}>GST Calculator</button>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Table responsive style={{ minHeight: "-02%", overflowX: 'auto' }}>
                            <thead>
                                <tr className='table-secondary'>
                                    <th>Type of sale</th>
                                    <th>Rate of Tax</th>
                                    <th>Taxable Amount</th>
                                    <th>Total Tax Amount</th>
                                    <th>IGST</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>Rate of Cess</th>
                                    <th>CESS</th>
                                </tr>
                            </thead>
                            <tbody className='mt-5 my-2' >
                                {rows.map(row => (
                                    <tr className='table-secondary' key={row.id}>
                                        <td>
                                            <select  className='form-control' value={row.typeOfSale} onChange={(e) => handleTypeOfSaleChange(row.id, e)}>
                                                <option >Select Type of Sale</option>
                                                <option value="inter">Inter Sale Rate</option>
                                                <option value="intra">Intra Sale Rate</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select  className='form-control' value={row.rateOfTax} onChange={(e) => handleRateOfTaxChange(row.id, e)} style={{ width: 80 }}>
                                                <option value="">Select Rate of Tax</option>
                                                <option value="0.25">0.25%</option>
                                                <option value="3">3%</option>
                                                <option value="5">5%</option>
                                                <option value="12">12%</option>
                                                <option value="18">18%</option>
                                                <option value="28">28%</option>
                                            </select>
                                        </td>
                                        <td><input type="text"  className='form-control' value={row.taxableAmount} onChange={(e) => handleTaxableAmountChange(row.id, e)} style={{ width: 80 }} pattern="[0-9]*" title="Please enter integer value" /></td>
                                        <td><input type="text"  className='form-control' value={isNaN(parseFloat(row.totalTaxAmount)) ? '' : row.totalTaxAmount} readOnly style={{ width: 80 }} /></td>
                                        <td><input type="text"  className='form-control' value={isNaN(parseFloat(row.igst)) ? '' : row.igst} readOnly style={{ width: 80 }} /></td>
                                        <td><input type="text"  className='form-control' value={isNaN(parseFloat(row.cgst)) ? '' : row.cgst} readOnly style={{ width: 80 }} /></td>
                                        <td><input type="text"  className='form-control' value={isNaN(parseFloat(row.sgst)) ? '' : row.sgst} readOnly style={{ width: 80 }} /></td>
                                        <td><input type="text"  className='form-control' value={row.rateOfCess} onChange={(e) => handleRateOfCessChange(row.id, e)} style={{ width: 80 }} /></td>
                                        <td><input type="text"  className='form-control' value={isNaN(parseFloat(row.cess)) ? '' : row.cess} readOnly style={{ width: 80 }} /></td>
                                    </tr>
                                ))}
                                {/* Total row */}
                                <tr className='table-secondary'>
                                    <td colSpan={2}></td>
                                    <td> Total Amount: {totalTaxableAmount.toFixed(2)}</td>
                                    <td>Total Tax: {totalTotalTaxAmount.toFixed(2)}</td>
                                    <td>Total IGST: {totalIGST.toFixed(2)}</td>
                                    <td> Total CGST: {totalCGST.toFixed(2)}</td>
                                    <td> Total SGST:{totalSGST.toFixed(2)}</td>
                                    <td></td>
                                    <td>Total CESS: {totalCESS.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </Table><br />
                        <div className='mt-3 '>
                            <button  onClick={handleReset} className='btn btn-primary mx-3 mt-2 ' style={{ position: 'absolute', bottom: 0, right: 0 }}>Reset</button>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>
    );
}