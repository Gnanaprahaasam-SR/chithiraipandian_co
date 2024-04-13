import React from 'react';
import { Table } from 'react-bootstrap';

export default function NetProfitCalculator() {
    return (
        <div className='container rounded px-4 mb-5' style={{ borderRadius: "10px" }}>
            <div className='row mt-3'>
                <div className='col-md-12 border mt-5' style={{ backgroundColor: "#F0F0F0", position: 'relative', zIndex: '99' }}>
                    <div className='text-center mb-4' style={{ marginTop: '-20px' }}>
                        <button className='btn btn-primary' style={{ borderRadius: "10px", top: '50%' }}>Calculate Net Profit</button>
                    </div>
                    <div>
                        <Table responsive="sm md" >
                            <tbody className=''>
                                <tr>
                                    <td>Net Profit before Tax:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Loss On Sale of Fixed Assests/Undertaking(Net):</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Provision for Doubtful Debts:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Charity & Donations:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Misc Expenses:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Fixed Assets Written Off:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Amortization of Lease Hold Land Premium:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>News Print Claim Written-off:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Amalgamation Expenses Written Off:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Discount on Commercial Papers:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Any change in carrying amount of an asset or of a liability recognised in equity reserves including surplus in profit and loss account on measurement of the asset or the liability at fair value:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Any compensation, damages or payments made voluntarily, that is to say, otherwise than compensation or damages to be paid in virtue of any legal liability including a liability arising from a breach of contract:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Any other expenses, which has been deducted from the profits:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Profit by way of premium on issue of shares:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Profit on sale of forefited shares:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Profit of capital nature including profit from sale of undertaking:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Profit from sale of immovable property /fixed assets of capital nature:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Any change in carrying amount of an asset or of a liability recognised in equity reserves including surplus in profit and loss account on measurement of the asset or the liability at fair value:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Net Profit:</td>
                                    <td><input type='text' className='form-control' /></td>
                                </tr>
                            </tbody>
                            <div className='mt-3' style={{ textAlign: 'center' }}>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    );
}