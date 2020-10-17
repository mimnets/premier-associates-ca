import React from 'react';
import './OurPartner.css'


const OurPartner = ({brand}) => {
    return (
        <div className="col-md-2 d-flex text-center"> 
        <div className="info-container">
                <a href={brand.link} target="_blank"><img src={brand.img} alt=""/></a>
        </div>
        </div>
    );
};

export default OurPartner;