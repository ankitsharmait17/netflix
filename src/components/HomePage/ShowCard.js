import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShowCard = ({ show }) => {
  return (
    <Card>
      <Link to={`/Show/${show.imdbID}`}>
        <CardImg
          top
          src={`${window.location.origin}/images/posters/${show.poster}`}
          alt="Card image cap"
        />
      </Link>
      <CardBody>
        <CardTitle>{show.title}</CardTitle>
        <CardSubtitle>({show.year})</CardSubtitle>
        <CardText>{show.description}</CardText>
      </CardBody>
    </Card>
  );
};

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowCard;
