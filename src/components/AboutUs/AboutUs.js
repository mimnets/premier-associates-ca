import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <Container style={{backgroundColor:'#FBD062'}} className="about-container">
            <Navbar></Navbar>
            <div className="row my-5 ty-5">
                <div className="col-md-6">
                    <img className="img-fluid" width="100%" height="100%" src="https://1.bp.blogspot.com/-5cv_NxJi2zg/X4wEzZy9uZI/AAAAAAAAobk/ijNobVCeKyYIDNxsTuckFVHxNI_EWIz5ACLcBGAsYHQ/s2048/ashim-d-silva-ZmgJiztRHXE-unsplash.jpg" alt=""/>
                </div>
                <div className="col-md-6 my-5 ty-5">
                <h3>
                Our Story
                </h3>
                <span>PREMIER Associates Limited is an Industrial Solution Provider. It all started with a vision to provide our client a one-stop solution for all their industrial needs. This vision led us to be one of the pioneers in this field. In course of time we have teamed up with some of the best brands in the business to provide our client the optimum solution and meet the ever changing demand of the FMCG culture.</span>
                    
                </div>
                <div className="col-md-6 my-5 ty-5">
                <h3>Mission</h3>
                <span>Our mission is to be customers’ one-stop solution for Industrial Machinery in the Ready Made Garments Industries. </span>
                <br/>
                <br/>
                <h3>Vision</h3> 
                <span>Our vision is to grow to be the Market leader in Product, Service and Spare Parts.</span>
                </div>
                <div className="col-md-6">
                <img className="img-fluid" width="100%" height="100%" src="https://1.bp.blogspot.com/-tlLCXrzSghE/X4wEzvXLVpI/AAAAAAAAobo/gz0BTt2beBExdRXvzdDSDb8TwUjwBT-MgCLcBGAsYHQ/s2048/clark-street-mercantile-S042liZk3A8-unsplash.jpg" alt=""/>
                </div>
                <div className="col-md-12 my-5 ty-5">
                    <h3>The Synergy</h3>
                    <span>
                    We currently employ 55 employees for our customers need. We have an excellent combination of IE Engineers, Technicians, on premise service personnel & customer care department. To provide services at optimal cost we arrange ad-hoc basis engineers and other technical persons. It adds to the agile nature of our business. All of which is to provide our clients with on demand and customized service for their unique necessity. 
                    </span>
                </div>
            </div>
            <Footer></Footer>
        </Container>
            
        
    );
};

export default AboutUs;