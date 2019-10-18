import React, { useEffect, useState } from "react";
import * as imdbAPI from "../../api/imdbAPI";
import ShowDisplay from "./ShowDisplay";
import ShowNotFound from "./ShowNotFound";
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
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const id = match.params.id;
      const show = data.shows.find(element => element.imdbID === id);
      if (show) {
        const result = await imdbAPI.getImdbRating(id);
        setshowData({
          title: show.title,
          description: show.description,
          rating: result.imdbRating,
          year: show.year,
          poster: show.poster,
          trailer: show.trailer
        });
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [match]);

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <ShowNotFound />
  ) : (
    <ShowDisplay showData={showData} />
  );
};

ShowPage.propTypes = {
  match: PropTypes.object
};

export default ShowPage;
