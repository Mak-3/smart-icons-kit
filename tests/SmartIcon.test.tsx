import React from "react";
import { render } from "@testing-library/react";
import { SmartIcon, registerIconFamily } from "../src";
import { FaBeer } from "react-icons/fa";

describe("SmartIcon", () => {
  it("renders a lucide icon from synonym", () => {
    const { container } = render(<SmartIcon name="house" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a react-icon after registering new family", () => {
    registerIconFamily("fa", {
      beer: {
        synonyms: ["beer", "drink", "alcohol"],
        component: FaBeer,
      },
    });

    const { container } = render(<SmartIcon name="drink" family="fa" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("returns null for unknown synonym", () => {
    const { container } = render(<SmartIcon name="xyz" />);
    expect(container.firstChild).toBeNull();
  });
});
