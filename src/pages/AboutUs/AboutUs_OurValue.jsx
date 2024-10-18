import React, { useState } from 'react';
import AboutUsData from './AboutUsData';

export default function AboutUs_OurValue() {
    const ourValueData = AboutUsData.values;
    const [expandedSections, setExpandedSections] = useState({});

    const toggleExpand = (title) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    return (

        <div className='overflow-hidden'>
            <div className='position-relative pb-4' >
                <img src={ourValueData.image} alt="ourValueData" width="100%" style={{ maxHeight: "600px" }} />
                <h1 className=' aboutus-heading pb-3'>{ourValueData.title}</h1>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={ourValueData.categories[0].image} alt="title" width="70%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{ourValueData.categories[0].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{ourValueData.categories[0].description}</p>
                </div>
            </div>
            <hr className='mx-5' />
            <div className='row d-flex flex-sm-row-reverse justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={ourValueData.categories[1].image} alt="title" width="70%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{ourValueData.categories[1].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{ourValueData.categories[1].description}</p>
                </div>

            </div>
            <hr className='mx-5' />
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={ourValueData.categories[2].image} alt="title" width="70%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{ourValueData.categories[2].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{ourValueData.categories[2].description}</p>
                </div>
            </div>
            <hr className='mx-5' />
            <div className='row d-flex flex-sm-row-reverse justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={ourValueData.categories[3].image} alt="title" width="80%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{ourValueData.categories[3].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{ourValueData.categories[3].description}</p>
                </div>

            </div>
            <hr className='mx-5' />
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 px-md-4 px-2 d-flex justify-content-center'>
                    <img src={ourValueData.categories[4].image} alt="title" width="70%" />
                </div>
                <div className='col-md-6 px-5'>
                    <h3 className='main-title text-center pb-3'>{ourValueData.categories[4].title}</h3>
                    <p style={{ textAlign: 'justify' }}>{ourValueData.categories[4].description}</p>
                </div>
            </div>
        </div>

    );
}