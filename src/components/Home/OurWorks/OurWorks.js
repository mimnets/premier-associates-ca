import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OurWorks.css'

const OurWorks = () => {
    return (
      <section className="my-5 py-5">
        <div className="container carousel-container img-fluid">
          <div className="row">
            <div className="col-md-12">
            <h1 style={{textAlign: 'center', color: 'black'}}>Here are some of <span style={{color:'green'}}>Brand products</span> </h1>
            </div>
          </div>
          <div className="row carousel">
            <div className="col-md-12">

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://1.bp.blogspot.com/-ylzdpKEbhcw/X4K66TgrHVI/AAAAAAAAoRI/6_c9qsaAR20WHtCNHf_B50LV0bk45LHjwCLcBGAsYHQ/s570/3.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-S_MlMxUXGQ8/X4K66elA9WI/AAAAAAAAoRE/sSDem4D3Avo8ITEQhRrnwViIPIFP96OxwCLcBGAsYHQ/s570/2.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-Jyl2V-5pw28/X4K66QElBWI/AAAAAAAAoRA/gNlHkwQY_NUQNh_t6j4dpBDXX0H3IqbrQCLcBGAsYHQ/s570/1.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-xncjvO8lAA4/X4K67HKlmlI/AAAAAAAAoRM/1MBv_tWGJIcPZghjp7zDYr2KI2cXUR0MwCLcBGAsYHQ/s831/4.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-3R16VTS0EqM/X4K67ZQj4NI/AAAAAAAAoRQ/oAn9rMMn94AdvwDbR2vlh_oFcVnQhu3EwCLcBGAsYHQ/s570/5.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-0Dfd4YNXB3A/X4K67mAVzTI/AAAAAAAAoRU/oN7GqlFicckRvBFz7ToSm4Kb52Vt78plwCLcBGAsYHQ/s570/6.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://1.bp.blogspot.com/-PcS3Z95sKwM/X4K67xFyOGI/AAAAAAAAoRY/0kvBFbNmCMUmerWY5HIH_Ckce8_aMj6dgCLcBGAsYHQ/s739/7.jpg" class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>

            {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-HQAkin1xXpc/X4iMq9LPC0I/AAAAAAAAoYQ/d5Nv3j2yiyQVSRxGtw1cYQhkwUln3mEUQCLcBGAsYHQ/s1110/carousel-5.png"
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-Jh3qWrR8l1c/X4iMpUkdozI/AAAAAAAAoYE/OEYc8xVsTk89buP9xXA1QpbkZxM0AC9jQCLcBGAsYHQ/s1397/carousel-1.png"
              alt="Third slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/--QYZ1PqYgJY/X4iMpWFHuAI/AAAAAAAAoYI/Wu4nk-DiWc0_w8fPQcRKO70TvpCJDSXwQCLcBGAsYHQ/s1405/carousel-2.png"
              alt="Third slide"
            />

          
          </Carousel.Item>
        </Carousel> */}
            </div>
          </div>

        
        </div>
        </section>
    );
};

export default OurWorks;