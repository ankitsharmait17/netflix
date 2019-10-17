import React, { useState, Fragment } from "react";
import NavBar from "./NavBar";
import MovieGrid from "./MovieGrid";
import data from ".././data.json";
const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Fragment>
      <NavBar searchText={searchText} onChange={setSearchText} />
      <MovieGrid searchText={searchText} shows={data.shows} />
    </Fragment>
  );
};

export default HomePage;
