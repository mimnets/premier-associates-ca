import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <section className="container">
            <div>
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" href="/"><img src={logo} alt="" style={{height:'50px'}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link mx-3" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#partners">Our Pertners</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#service">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#contact">Contact</a>
            </li>
            </ul>
            {/* <button className="btn btn-nbar my-2 my-sm-0 " type="submit"><span style={{color:'white'}}><Link to="/login">Login</Link></span></button> */}
        </div>
        </nav>
        </div>
        </section>
    );
};

export default Navbar;