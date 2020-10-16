import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className='row d-flex justify-content-center my-5 ty-5'>
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
                <br/>
                <button className="btn btn-headermain"><span style={{color:'white'}}>Hire us</span></button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;