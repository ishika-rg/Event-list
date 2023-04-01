import React from "react";
import EventCard from "../../Components/Card/Card.js";
import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const { eventList: list } = useSelector((state) => state.events);
  // console.log(list)
  // console.log(list.length)
  return (
    <div className="mt-3">
      <h1>All Events</h1>

      {list.length === 0 ? (
        <h3 className="mt-5">No events added !! </h3>
      ) : (
        <Container>
          <div className=" d-flex justify-center flex-wrap mt-5 align-center">
            {list.map((ele, index) => (
              <EventCard ele={ele} key={index} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
