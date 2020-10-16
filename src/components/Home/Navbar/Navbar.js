import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" href="#"><img src={logo} alt="" style={{height:'30px'}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link mx-3" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="#">Contact</a>
            </li>
            {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li> */}
            {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
            </ul>
            <button className="btn btn-nbar my-2 my-sm-0 " type="submit"><span style={{color:'white'}}>Login</span></button>
        </div>
        </nav>
    );
};

export default Navbar;