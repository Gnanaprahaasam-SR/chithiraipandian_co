import React, { useState } from 'react';
import AboutUsData from './AboutUsData';

export default function AboutUs_OurValue() {
    const ourValueData = AboutUsData.values;
    const entries = Object.entries(ourValueData);

    const [flippedState, setFlippedState] = useState({});

    const handleCardClick = (key) => {
        setFlippedState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleCardMouseLeave = (key) => {
        setFlippedState(prevState => ({
            ...prevState,
            [key]: false
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
                <div className='row'>
                    {entries.slice(2, 5).map(([key, value]) => (
                        <div key={key} className="col-md-4 mb-3">

                            <div
                                className={`card  ${flippedState[key] ? 'is-flipped' : ''}`}
                                onClick={() => handleCardClick(key)}
                                onMouseLeave={() => handleCardMouseLeave(key)}
                            >
                                <div className="card-front d-flex flex-column align-items-center">
                                    <div className="d-flex align-items-center">
                                        {React.cloneElement(value.icon, { style: { fontSize: '5em' } })}
                                    </div>
                                    <h5 className="" style={{ textAlign: 'center' }}>{key}</h5>
                                </div>
                                <div className="card-back">
                                    <h5 className="card-title">{key}</h5>
                                    <p className="card-text ">{value.content}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='row'>
                    {entries.slice(5).map(([key, value]) => (
                        <div key={key} className="col-md-6 mb-3">

                            <div

                                className={`card ${flippedState[key] ? 'is-flipped' : ''}`}
                                onClick={() => handleCardClick(key)}
                                onMouseLeave={() => handleCardMouseLeave(key)}
                            >
                                <div className="card-front d-flex flex-column align-items-center">
                                    <div className="d-flex align-items-center">
                                        {React.cloneElement(value.icon, { style: { fontSize: '5em' } })}
                                    </div>
                                    <h5 className="" style={{ textAlign: 'center' }}>{key}</h5>
                                </div>


                                <div className="card-back">
                                    <h5 className="card-title">{key}</h5>
                                    <p className="card-text">{value.content}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}