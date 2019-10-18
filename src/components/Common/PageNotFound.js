import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container style={{ color: "white", marginTop: "20px" }}>
      <Row>
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
      </Row>
      <br />
      <Row>
        <Col lg="12" className="text-center">
          <h1>Oops!!Page not found.</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
