import React from 'react';
import AboutUsData from './AboutUsData';


export default function AboutUs_TheFirm() {
    const firmData = AboutUsData.firm;

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className='row'>
                <div className='position-relative'>
                    <img src={firmData.image} alt=" not found" width="100%" />
                    <h2 className='aboutus-heading'>{firmData.title}</h2>
                </div>


            </div>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-md-12'>
                        {firmData.categories.map(category => (
                            <div key={category.title}>
                                <h3 className='aboutus-title'>{category.title}</h3>
                                <p className='aboutus-description'
                                    onMouseEnter={(e) => { e.target.style.transform = 'translateY(-5px)'; }}
                                    onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}>
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}