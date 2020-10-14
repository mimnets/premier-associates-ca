import React from 'react';
import { Carousel } from 'react-bootstrap';

const OurWorks = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://1.bp.blogspot.com/-m266oOBBGq8/X4dPqOtNhdI/AAAAAAAAoV0/9KK8iqSD2H896qNcV9Txi6J_0UH2WUkpgCLcBGAsYHQ/s0/service1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="https://1.bp.blogspot.com/-0jnFDfyjJSM/X4dPqOms6yI/AAAAAAAAoVs/_NegFoAHI7ohTKVFrHAP4-4Vl-umpNdMwCLcBGAsYHQ/s0/service2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="https://1.bp.blogspot.com/-ocmYM-I8OjA/X4dPqETy4pI/AAAAAAAAoVw/SLxq0JcwyfEFxQ9rTnGy09rb7yEsr6dgACLcBGAsYHQ/s0/service3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
        </div>
    );
};

export default OurWorks;