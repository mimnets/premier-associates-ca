import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main className='row d-flex justify-content-between'>
            <div className="col-md-4">
                <h2>
                Let’s Grow Your 
                <br/>
                Brand To The
                <br/> 
                Next Level
                </h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</span>
                <br/>
                <button className="btn btn-primary">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;