import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import * as imdbAPI from "../api/imdbAPI";
import data from ".././data.json";
import Spinner from "./Spinner";

const MoviePage = ({ match }) => {
  const [showData, setshowData] = useState({
    title: "",
    rating: "",
    year: "",
    poster: "",
    trailer: "",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    const id = match.params.id;
    const show = data.shows.find(element => element.imdbID === id);
    const result = await imdbAPI.getImdbRating(id);
    setshowData({
      title: show.title,
      description: show.description,
      rating: result.imdbRating,
      year: show.year,
      poster: show.poster,
      trailer: show.trailer
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
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
          <h2>
            <span style={{ color: "yellow" }}>&#9733;</span>
            {showData.rating}/10
          </h2>
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

export default MoviePage;
