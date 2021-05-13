import React from "react";
import { render, screen } from "utils/testing/test-utils";

import { Results } from ".";

describe("<Results />", () => {
  it("should render the result for developers", () => {
    const { getByAltText, getByText } = render(<Results weight={0} />);
    getByText(
      "Chances are you found out I didn't add any validation to the radio buttons ;)"
    );
    getByAltText("Developers");
  });
  it("should render the result for introverts", () => {
    const { getByAltText, getByText } = render(<Results weight={2} />);
    getByText("Chances are you are introverted.");
    getByAltText("Introverted");
  });
  it("should render the result for extroverts", () => {
    const { getByAltText, getByText } = render(<Results weight={11} />);
    getByText("Chances are you are extroverted.");
    getByAltText("Extroverted");
  });
});
