import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import * as imdbAPI from "../../api/imdbAPI";
import data from "../../data.json";
import Spinner from "../Common/Spinner";
import PropTypes from "prop-types";

const ShowPage = ({ match }) => {
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

ShowPage.propTypes = {
  match: PropTypes.object
};

export default ShowPage;
