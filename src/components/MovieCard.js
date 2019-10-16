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

const MovieCard = ({ show }) => {
  return (
    <Card>
      <Link to={{ pathname: "/Movie", show }}>
        <CardImg
          top
          src={require(`../images/posters/${show.poster}`)}
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

export default MovieCard;
