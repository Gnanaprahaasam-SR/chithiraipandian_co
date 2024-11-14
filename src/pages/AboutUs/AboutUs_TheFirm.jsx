import React from 'react';
import AboutUsData from './AboutUsData';


export default function AboutUs_TheFirm() {
    const firmData = AboutUsData.firm;

    return (
        <div className='overflow-hidden'>
            {/* <div className='position-relative pb-3 ' >
                <img src={firmData.image} alt="firmData" width="100%" className='aboutUs-image' />
                <h1 className=' aboutus-heading pb-3'>{firmData.title}</h1>
            </div> */}

            <div className='row'>
                <img src={require("../../images/AboutUs1.jpg")} alt="AboutUs" width="80%" style={{height:"100%"}} />
                <div>
                    <h1 className='text-center typing pb-3'>{firmData.title}</h1>
                </div> 

            </div>

            <div className='row d-flex justify-content-around  g-md-5 g-3 px-md-5 px-2  pb-3' >
                <div className='col-md-6 col-12  '>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className=' px-4 d-flex justify-content-center  imageContainer'>
                            <img src={firmData.categories[0].image} alt="title" className='firmData-image' />
                        </div>
                        <div className=' ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{firmData.categories[0].title}</h3>
                            <p className='p-2'>{firmData.categories[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 '>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className=' px-4  d-flex justify-content-center imageContainer '>
                            <img src={firmData.categories[1].image} alt="title" className='firmData-image' />
                        </div>
                        <div className='ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{firmData.categories[1].title}</h3>
                            <p className='p-2'>{firmData.categories[1].description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className='px-2 d-flex justify-content-center imageContainer'>
                            <img src={firmData.categories[2].image} alt="title" className='firmData-image' />
                        </div>
                        <div className=' ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{firmData.categories[2].title}</h3>
                            <p className='p-2'>{firmData.categories[2].description}</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 col-12'>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className='px-2 d-flex justify-content-center imageContainer '>
                            <img src={firmData.categories[3].image} alt="title" className='firmData-image ' />
                        </div>
                        <div className='ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{firmData.categories[3].title}</h3>
                            <p className='p-2'>{firmData.categories[3].description}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}