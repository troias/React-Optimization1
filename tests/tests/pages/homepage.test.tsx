import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../../src/app/page";
import "@testing-library/jest-dom";
import Button from "../../../src/components/ui/buttons/Button";

import Link from "next/link";

//

//test if has hero componnet?
describe("Home page", () => {
  test("should render hero component", () => {
    render(<Home />);
    const hero = screen.getByTestId("hero");
    // console.log(hero); // check if the element is found
    // console.log(hero.textContent); // check the contents of the element
    expect(hero).toBeInTheDocument();
  });
});

//test if hero componnet has correct text jest ?

describe("ButtonWithLink component", () => {
  const clickHandler = jest.fn();

  it("should render a button", () => {
    const { getByRole } = render(
      <Button onClick={clickHandler}> Read the story </Button>
    );

    const button = getByRole("button");
    expect(button).toHaveTextContent("Read the story");
  });
});

describe("there should be a NextJS Link Wrapping the button", () => {
  const clickHandler = jest.fn();

  it("should render a button", () => {
    const { getByRole } = render(
      <Link href="/story">
        <Button onClick={clickHandler}> Read the story </Button>
      </Link>
    );

    const button = getByRole("button");
    expect(button).toHaveTextContent("Read the story");
  });
});
