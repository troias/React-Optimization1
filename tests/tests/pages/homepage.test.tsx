import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../../src/app/page";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello World/i);

  expect(linkElement).toBeInTheDocument();
});
//
