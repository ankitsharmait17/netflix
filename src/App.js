import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/Movie" component={MoviePage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
