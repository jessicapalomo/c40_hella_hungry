import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BusinessCard = ({ business }) => {
  return (
    <Card style={{ width: '18rem' }} className="ml-2 mb-2">
      <Card.Img variant="top" src={business.image_url} className="card-image" />
      <Card.Body className="card-body">
        <Card.Title>
          {business.name} {business.price}
        </Card.Title>
        <Card.Text>
          <p>{business.location.address1}</p>
          <p className="text-center">Rating: {business.rating}</p>
        </Card.Text>
        <a href={business.url}>
          <Button variant="primary">Visit Site</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default BusinessCard;
