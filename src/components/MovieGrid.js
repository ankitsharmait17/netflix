import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieCard from "./MovieCard";

const MovieGrid = ({ shows, searchText }) => {
  return (
    <Container style={{ marginTop: "75px" }}>
      <Row>
        {shows.map((element, index) => (
          <Col lg="4" className="movie-grid-col" key={index}>
            <MovieCard show={element} key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGrid;
