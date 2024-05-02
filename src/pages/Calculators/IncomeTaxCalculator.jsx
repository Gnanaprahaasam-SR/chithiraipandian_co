import React from 'react';
import { Link } from 'react-router-dom';
 
export default function IncomeTaxCalculator() {
 
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = currentYear; year >= 2007; year--) {
        const nextYear = year + 1;
        const financialYear = `${year}-${nextYear.toString()}`;
        yearOptions.push(
            <option key={financialYear} value={financialYear}>
                {financialYear}
            </option>
        );
    }
 
    return (
        <div className='container mt-5 mb-5' >
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table table-responsive'>
                        <tbody>
                            <tr>
                                <td colSpan='1'></td>
                                <td colSpan='3' align='center'><strong>Income Tax Calculator</strong></td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                            </tr>
                            <tr>
                                <td>Assessee Name</td>
                                <td><input type='number' /></td>
                                <td colSpan='2'></td>
                                <td>Financial Year</td>
                                <td>
                                    <select>
                                        {yearOptions}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Status of Tax Payer</td>
                                <td>
                                    <select>
                                        <option value='individual'>Individual</option>
                                        <option value='huf'>HUF</option>
                                        <option value='firm'>Firm</option>
                                        <option value='company'>Company</option>
                                    </select>
                                </td>
                                <td>Gender</td>
                                <td>
                                    <select>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </td>
                                <td>Senior Citizen</td>
                                <td>
                                    <select>
                                        <option value='not senior citizen'>Not Senior Citizen</option>
                                        <option value='senior citizen'>Senior Citizen</option>
                                        <option value='very senior citizen'>Very Senior Citizen</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'></td>
                                <td colSpan='2'></td>
                                <td colSpan='2'></td>
                            </tr>
                            <tr>
                                <td colSpan='7' align='center'><strong>Statement of Income and Tax</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Income:</strong></td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''>Rs.</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                            </tr>
                            <tr>
                                <td>Income from House Property (Enter Income after Standard Deduction Of 30% as per Sec.24(a))</td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                            </tr>
                            <tr>
                                <td>Business Income</td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                            </tr>
                            <tr>
                                <td>Capital gains</td>
                                <td colSpan='2'></td>
                                <td colSpan=''>STT@10%</td>
                                <td colSpan=''>Others</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'30px'}}>(a) Short term</td>
                                <td colSpan='2'></td>
                                <td colSpan=''><input style={{width:'80px'}} type='number'/></td>
                                <td colSpan=''><input style={{width:'80px'}} type='number'/></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='2'></td>
                                <td colSpan=''>@10%</td>
                                <td colSpan=''>@20%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'30px'}}>(a) Long term</td>
                                <td colSpan='2'></td>
                                <td colSpan=''><input style={{width:'80px'}} type='number'/></td>
                                <td colSpan=''><input style={{width:'80px'}} type='number'/></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Income from other sources</td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'30px'}}>(a) Incomes(including interest,Dividend etc.)</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'30px'}}>(b)  Agriculture Income</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'30px'}}>(c) Winning from lotteries 30%</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Deduction under chapter VIA:</strong></td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Deduction u/s 80C,80CCC,80CCD</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Deduction u/s 80 D (Mediclaim)</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Deduction u/s 80 D</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Other Deduction </td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Detail of Tax Paid:</strong></td>
                                <td colSpan='3'></td>
                                <td colSpan=''></td>
                                <td colSpan=''></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Tax Deducted at Source</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Advance tax paid</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft:'20px'}}>Self assessment tax paid</td>
                                <td colSpan='2'></td>
                                <td colSpan='1'></td>
                                <td colSpan=''></td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan='2'></td>
                                <td colSpan='3'>Total Taxpaid</td>
                                <td colSpan=''><input  type='number'/></td>
                                <td></td>
                            </tr>
 
                            <tr>
                                <td colSpan='1'></td>
                                <td colSpan="3" style={{ textAlign: 'center' }}>
                                    <div className='px-5 ' style={{ textAlign: 'center' }}>
                                        <button style={{marginRight:'10px'}}>Calculate</button>
                                        <button style={{marginRight:'10px'}} >Print</button>
                                        <button>Back</button>
                                    </div>
                                </td>
                                <td colSpan='3'></td>
                            </tr>
                           
                        </tbody>
 
                    </table>
                    <div className='d-flex flex-row-reverse'>
                        <Link to='/tdscalculator'><button className='btn btn-primary'>HRA Calculator</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}