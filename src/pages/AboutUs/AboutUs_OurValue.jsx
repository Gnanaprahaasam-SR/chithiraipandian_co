import React from 'react';
import AboutUsData from './AboutUsData';

export default function AboutUs_OurValue() {
    const ourValueData = AboutUsData.values;


    return (

        <div className='overflow-hidden'>
            <div className='position-relative p-3 p-md-5 d-flex justify-content-center' >
                <img src={ourValueData.image} alt="ourValueData" width="100%" style={{ maxHeight: "600px", objectFit: "cover" }} className=' rounded-4 ' />
                <h1 className=' aboutus-heading pb-3'>{ourValueData.title}</h1>
            </div>

            <div className='row d-flex justify-content-around  g-md-5 g-3 px-md-5 px-2  pb-3' >
                <div className='col-md-6 col-12  '>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className=' px-4 d-flex justify-content-center ourValue-image'>
                            <img src={ourValueData.categories[0].image} alt="title" width="100%"  />
                        </div>
                        <div className=' ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{ourValueData.categories[0].title}</h3>
                            <p className='p-2'>{ourValueData.categories[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className='px-2 d-flex justify-content-center ourValue-image'>
                            <img src={ourValueData.categories[2].image} alt="title" width="100%"  />
                        </div>
                        <div className=' ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{ourValueData.categories[2].title}</h3>
                            <p className='p-2'>{ourValueData.categories[2].description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 '>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className=' px-4  d-flex justify-content-center ourValue-image'>
                            <img src={ourValueData.categories[1].image} alt="title" width="100%" />
                        </div>
                        <div className='ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{ourValueData.categories[1].title}</h3>
                            <p className='p-2'>{ourValueData.categories[1].description}</p>
                        </div>
                    </div>
                </div>


                <div className='col-md-6 col-12'>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className='px-2 d-flex justify-content-center ourValue-image '>
                            <img src={ourValueData.categories[3].image} alt="title" width="100%" />
                        </div>
                        <div className='ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{ourValueData.categories[3].title}</h3>
                            <p className='p-2'>{ourValueData.categories[3].description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='shadow rounded-4 ourValue-card'>
                        <div className=' px-2 d-flex justify-content-center ourValue-image'>
                            <img src={ourValueData.categories[4].image} alt="title" width="100%" />
                        </div>
                        <div className='ourValue-content'>
                            <h3 className='main-title text-center pb-3'>{ourValueData.categories[4].title}</h3>
                            <p className='p-2'>{ourValueData.categories[4].description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}