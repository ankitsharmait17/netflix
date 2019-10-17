import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ShowPage from "./components/ShowPage/ShowPage";
import PageNotFound from "./components/Common/PageNotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/Movie/:id" exact component={ShowPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
