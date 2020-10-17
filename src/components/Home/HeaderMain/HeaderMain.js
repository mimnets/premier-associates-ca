import React from 'react';
import { Carousel } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className='row d-flex justify-content-center my-5 ty-5'>
            <div className="col-md-4">
                <h2>
                Let’s Grow Your 
                <br/>
                Business To The
                <br/> 
                Next Level
                </h2>
                <span>Premier Associates is proud to be your business growth partner by providing you international sewing machine and industrial machineries.</span>
                <br/>
                <br/>
                <button className="btn btn-headermain"><span style={{color:'white'}}>Contact us</span></button>
            </div>
            <div className="col-md-6">
                {/* <img src={frame} alt="" className="img-fluid" /> */}
                <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-HQAkin1xXpc/X4iMq9LPC0I/AAAAAAAAoYQ/d5Nv3j2yiyQVSRxGtw1cYQhkwUln3mEUQCLcBGAsYHQ/s1110/carousel-5.png"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-Jh3qWrR8l1c/X4iMpUkdozI/AAAAAAAAoYE/OEYc8xVsTk89buP9xXA1QpbkZxM0AC9jQCLcBGAsYHQ/s1397/carousel-1.png"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/--QYZ1PqYgJY/X4iMpWFHuAI/AAAAAAAAoYI/Wu4nk-DiWc0_w8fPQcRKO70TvpCJDSXwQCLcBGAsYHQ/s1405/carousel-2.png"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
            </div>
        </main>
    );
};

export default HeaderMain;