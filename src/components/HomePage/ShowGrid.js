import React from "react";
import { Container, Row, Col } from "reactstrap";
import ShowCard from "./ShowCard";
import PropTypes from "prop-types";

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
          <Col lg="3" className="show-grid-col" key={index}>
            <ShowCard show={element} key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

ShowGrid.propTypes = {
  shows: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired
};

export default ShowGrid;
