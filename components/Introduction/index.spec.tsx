import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "utils/testing/test-utils";

import { Introduction } from ".";

describe("Introduction", () => {
  it("should render the challenge text", () => {
    render(<Introduction />);

    const paragraph = screen.getByText(
      "The goal is to Build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert."
    );

    expect(paragraph).toBeInTheDocument();
  });
});
