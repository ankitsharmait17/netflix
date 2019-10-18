import React from "react";
import ShowGrid from "./ShowGrid";
import data from "../../data.json";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";

function renderShowsGrid(args) {
  const defaultProps = {
    searchText: "",
    shows: data.shows
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <ShowGrid {...props} />
    </BrowserRouter>
  );
}

it("renders all shows", () => {
  const wrapper = renderShowsGrid();
  expect(wrapper.find(".card").length).toBe(21);
});

it("renders one show", () => {
  const wrapper = renderShowsGrid({ searchText: "daredevil" });
  expect(wrapper.find(".card").length).toBe(1);
});
