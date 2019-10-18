import React from "react";
import ShowPage from "./ShowPage";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

it("passing correct imdbID,should render,Show display component", () => {
  const tree = renderer.create(
    <BrowserRouter>
      <ShowPage match={{ params: { id: "tt1856010" } }} />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});

it("passing incorrect imdbID,should render,ShowNotFound component", () => {
  const tree = renderer.create(
    <BrowserRouter>
      <ShowPage match={{ params: { id: "2" } }} />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
