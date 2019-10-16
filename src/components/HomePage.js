import React, { useEffect, useState, Fragment } from "react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import data from ".././data.json";
const HomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <MovieGrid shows={data.shows} />
    </Fragment>
  );
};

export default HomePage;
