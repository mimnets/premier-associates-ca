import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceList = ({slist}) => {
    return (
        <div className="col-md-4 d-flex text-center">
            <Card>
            <Card.Img variant="top" src={slist.img} />
            <Card.Body>
                <Card.Title>{slist.title}</Card.Title>
                <Card.Text>
                {slist.description}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceList;