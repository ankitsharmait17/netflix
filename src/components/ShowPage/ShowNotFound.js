import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ShowNotFound = () => {
  return (
    <Container style={{ color: "white", marginTop: "20px" }}>
      <Row>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </Row>
      <br />
      <Row>
        <Col lg="12" className="text-center">
          <h1>Show not found.</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowNotFound;
