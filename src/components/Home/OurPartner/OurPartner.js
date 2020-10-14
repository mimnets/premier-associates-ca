import React from 'react';
import './OurPartner.css'


const OurPartner = ({brand}) => {
    return (
        <div className="col-md-2 mt-4"> 
        <div className="d-flex justify-content-center info-container">
        <div>
                <img src={brand.img} alt=""/>
            </div>
        </div>
            
        </div>
    );
};

export default OurPartner;