import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>

          <Link to="/add_event">
            <Button variant="light">Add Event</Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
