import React, { useState, Fragment } from "react";
import NavBar from "./NavBar";
import ShowGrid from "./ShowGrid";
import data from "../../data.json";
const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Fragment>
      <NavBar searchText={searchText} onChange={setSearchText} />
      <ShowGrid searchText={searchText} shows={data.shows} />
    </Fragment>
  );
};

export default HomePage;
