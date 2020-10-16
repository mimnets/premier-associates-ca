import React from 'react';
import CustomerNav from '../CustomerNav/CustomerNav';
import Order from '../Order/Order';

const CustomerHome = () => {
    return (
        <div>
            <CustomerNav></CustomerNav>
            <Order></Order>
        </div>
    );
};

export default CustomerHome;