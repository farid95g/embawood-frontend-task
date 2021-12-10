import React from "react";
import { Card, Button } from "react-bootstrap";

export const BookCard = ({
  title,
  image,
  subtitle,
  url
}) => {
  const seeBookDetails = (url) => {
    window.open(url, "_blank");
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
        </Card.Text>
        <Button variant="primary" onClick={() => seeBookDetails(url)}>See details</Button>
        <Button variant="primary" onClick={() => seeBookDetails(url)}>See details</Button>
      </Card.Body>
    </Card>
  );
}