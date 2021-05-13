import React from "react";
import { render, screen } from "utils/testing/test-utils";

import { Introduction } from ".";

describe("Introduction", () => {
  beforeEach(() => {
    render(<Introduction />);
  });
  it("should render the teamway logo", () => {
    const logo = screen.getByAltText("teamway.io");
    expect(logo).toBeInTheDocument();
  });
  it("should render the challenge text", () => {
    const paragraph = screen.getByText(
      "The goal is to Build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert."
    );
    expect(paragraph).toBeInTheDocument();
  });
});
