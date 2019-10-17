import React from "react";
import { Container, Row, Col } from "reactstrap";
import ShowCard from "./ShowCard";

const ShowGrid = ({ shows, searchText }) => {
  const filteredShows =
    searchText.length > 0
      ? shows.filter(element =>
          element.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : shows;
  return (
    <Container style={{ marginTop: "75px" }}>
      <Row>
        {filteredShows.map((element, index) => (
          <Col lg="3" className="movie-grid-col" key={index}>
            <ShowCard show={element} key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowGrid;
