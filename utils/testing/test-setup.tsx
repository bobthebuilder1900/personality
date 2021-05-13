/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from "react";

const mockIntersectionObserver = jest.fn();

mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ objectFit, ...rest }: any) => {
    return <img {...rest} />;
  },
}));

window.HTMLElement.prototype.scroll = jest.fn();
