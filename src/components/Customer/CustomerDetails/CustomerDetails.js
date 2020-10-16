import React from 'react';

const CustomerDetails = () => {
    return (
        <div>
            <section>
            <div className="row">
                <div className="col-md-2">
                    <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10">
                    <h1>Order Details</h1>
                </div>
            </div>
        </section>
        </div>
    );
};

export default CustomerDetails;