import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg } from "reactstrap";

const MoviePage = ({ location, history }) => {
  useEffect(() => {
    if (!location.show) {
      history.push("/");
    }
  }, []);
  return location.show ? (
    <Container style={{ color: "white" }}>
      <Row>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </Row>
      <br />
      <Row>
        <Col lg="8">
          <h1>{location.show.title}</h1>
        </Col>
        <Col lg="4">
          <h2>
            <span style={{ color: "yellow" }}>&#9733;</span>7.6/10
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg="1">({location.show.year})</Col>
      </Row>
      <Row>
        <Col lg="3">
          <Card>
            <CardImg
              height="100%"
              src={require(`../images/posters/${location.show.poster}`)}
              alt={location.show.title}
            ></CardImg>
          </Card>
        </Col>
        <Col lg="9" style={{ marginTop: "10px" }}>
          <iframe
            title={location.show.title}
            src={`https://www.youtube.com/embed/${location.show.trailer}`}
            width="100%"
            height="100%"
            frameborder="10px"
            allowfullscreen="yes"
          ></iframe>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg="12">
          Synopsis:<p>{location.show.description}</p>
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Please go back to home screen</h1>
  );
};

export default MoviePage;
