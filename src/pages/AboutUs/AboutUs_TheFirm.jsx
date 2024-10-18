import React from 'react';
import AboutUsData from './AboutUsData';


export default function AboutUs_TheFirm() {
    const firmData = AboutUsData.firm;

    return (
        <div className='overflow-hidden '>
            <div className='position-relative pb-3' >
                <img src={firmData.image} alt="firmData"  width="100%" style={{ maxHeight: "600px" }} />
                <h1 className=' aboutus-heading pb-3'>{firmData.title}</h1>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={firmData.categories[0].image} alt="title" width="70%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{firmData.categories[0].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{firmData.categories[0].description}</p>
                </div>
            </div>
            <hr className='mx-5'/>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{firmData.categories[1].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{firmData.categories[1].description}</p>
                </div>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={firmData.categories[1].image} alt="title" width="70%" />
                </div>
            </div>
            <hr className='mx-5'/>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={firmData.categories[2].image} alt="title" width="60%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{firmData.categories[2].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{firmData.categories[2].description}</p>
                </div>
            </div>
            <hr className='mx-5'/>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{firmData.categories[3].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{firmData.categories[3].description}</p>
                </div>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={firmData.categories[3].image} alt="title" width="80%" />
                </div>
            </div>
        </div>

    );
}