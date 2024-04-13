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
        <div style={{ overflowX: 'hidden' }}>
            <div className='row'>
                <div className='position-relative'>
                    <img src={ourValueData.image} alt='not found' width="100%" />
                    <h2 className='aboutus-heading'>{ourValueData.title}</h2>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row d-flex justify-content-center'>
                    {ourValueData.categories.map(category => (
                        <div className=' col-md-4' key={category.title}>
                            <div className='aboutus-card'>
                                <h3 className='aboutus-title'>{category.icon}</h3>
                                <h3 className='aboutus-title'>{category.title}</h3>
                                <p className='aboutus-description'>
                                    {expandedSections[category.title] ? category.content : `${category.content.substring(0, 100)}...`}
                                    <br />
                                    <button className='aboutus-button' onClick={() => toggleExpand(category.title)}>
                                        {expandedSections[category.title] ? 'Read Less' : 'Read More'}
                                    </button>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}