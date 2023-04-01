import React from "react";
import Card from "react-bootstrap/Card";

const EventCard = ({ ele }) => {
  return (
    <div>
      <Card
        style={{ width: "18rem", height: "200px", overflow: "auto" }}
        className="me-5 mb-3"
      >
        <Card.Body>
          <Card.Title>{ele.EventName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {ele.EventDate}
          </Card.Subtitle>
          <Card.Text>{ele.EventDetail}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{ele.Venue}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
