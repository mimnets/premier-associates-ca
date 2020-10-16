import React from 'react';
import CustomerNav from '../CustomerNav/CustomerNav';

const CustomerServiceList = () => {
    return (
        <section>
            <div className="row">
            <div className="col-md-2">
            <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10 my-2 ty-2">
                    
                    <h3>Service List</h3>
                </div>
            </div>
        </section>
    );
};

export default CustomerServiceList;