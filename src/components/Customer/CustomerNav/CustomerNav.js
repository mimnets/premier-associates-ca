import React from 'react';
import logo from '../../../images/logos/logo.png';

const CustomerNav = () => {
    return (
        <div>
            <a class="navbar-brand" href="/"><img src={logo} alt="" style={{height:'30px'}}/></a>
            <nav class="nav flex-column">
            <a class="nav-link active" href="/customer/order">Order</a>
            <a class="nav-link" href="/customer/service-list">Service List</a>
            <a class="nav-link" href="/customer/review">Review</a>
            </nav>
        </div>
    );
};

export default CustomerNav;