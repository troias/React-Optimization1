import React from "react";
import { render, screen } from "@testing-library/react";
import Story from "../../../src/app/story/page";
import "@testing-library/jest-dom";
import { steps } from "../../../src/lib/info";

// check if the Story Component has a title and a description

describe("Story page", () => {
  test("should render the title and the description", () => {
    render(<Story />);
    const title = screen.getByTestId("title");
    const description = screen.getByTestId("description");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});

// check if data is rendering correctly

describe("Story page", () => {
  test("should render steps by importing data from a file then mapping through it", () => {
    render(<Story />);
    const story = steps;
    expect(story).toHaveLength(3);
  });
});

// check if data is rendering correctly

describe("Story page", () => {
  test("should render steps by importing data from a file then mapping through it", () => {
    render(<Story />);
    const story = steps;
    expect(story).toHaveLength(3);
    expect(story[0].title).toBe("Ideation");
    expect(story[0].description).toBe(
      "The first step is to come up with a list of ideas for the project. I used figma to brain storm what I wanted to build."
    );
    expect(story[1].title).toBe("Design");
    expect(story[1].description).toBe(
      "The second step is to design the project. I used figma to design the project. And I used TailwindCSS design system as a foundation to quicky build a prototype."
    );
    expect(story[2].title).toBe("Development");
    expect(story[2].description).toBe(
      "The third step is all about bringing your project to life. I use NextJS to ensure a top-quality end result, TailwindCSS for speedy prototype building, Jest for seamless testing, and TypeScript for added safety."
    );
  });
});
