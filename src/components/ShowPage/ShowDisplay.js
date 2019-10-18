import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const ShowDisplay = ({ showData }) => {
  return (
    <Container style={{ color: "white", marginTop: "20px" }}>
      <Row>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </Row>
      <br />
      <Row>
        <Col lg="8">
          <h1>{showData.title}</h1>
        </Col>
        <Col lg="4">
          Rating:
          <span style={{ color: "yellow", fontSize: "40px" }}>&#9733;</span>
          <span style={{ fontSize: "40px" }}>{showData.rating}</span>/10
        </Col>
      </Row>
      <Row>
        <Col lg="1">({showData.year})</Col>
      </Row>
      <Row>
        <Col lg="3">
          <Card>
            <CardImg
              height="100%"
              src={`${window.location.origin}/images/posters/${showData.poster}`}
              alt={showData.title}
            ></CardImg>
          </Card>
        </Col>
        <Col lg="9" style={{ marginTop: "10px", borderRadius: "10px" }}>
          <iframe
            title={showData.title}
            src={`https://www.youtube.com/embed/${showData.trailer}`}
            width="100%"
            height="102%"
            frameBorder="10px"
            allowFullScreen="yes"
          ></iframe>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg="12">
          <b>Synopsis:</b>
          <p>{showData.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowDisplay;
