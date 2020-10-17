import React from 'react';
import { Carousel } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className='row d-flex text-center my-5 ty-5'>
            <div className="col-md-5">
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
                <button className="btn btn-headermain"><span style={{color:'white'}}><a href="#contact">Contact us</a></span></button>
            </div>
            <div className="col-md-7">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className="img-responsive center-block"  height={350} src="https://1.bp.blogspot.com/-Ce-fVdzgk8Q/X4h86i5oLDI/AAAAAAAAoXw/zLHA7m3IUVw6PnWAf9yIab4JuBV-O9MbwCLcBGAsYHQ/s904/yamato-slide.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-responsive center-block"  height={350} src="https://1.bp.blogspot.com/-gs-sqTsn36U/X4h86Zdsy4I/AAAAAAAAoXs/Hl5UmF78A_U6DTjAxoDgbfx4NsvlpjsSACLcBGAsYHQ/s904/brands-slide.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-responsive center-block"  height={350} src="https://1.bp.blogspot.com/-rVQyY-GuFvM/X4h86DAb5wI/AAAAAAAAoXo/18ufavrn6JMcPwlW56aEQOqoucbUyGGDgCLcBGAsYHQ/s904/at-yous-slide.jpg" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
            </div>
        </main>
    );
};

export default HeaderMain;