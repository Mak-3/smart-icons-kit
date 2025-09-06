import React from "react";
import { render } from "@testing-library/react";
import { SmartIcon, registerIconFamily } from "../src/react";

// Mock icon component for testing
const MockIcon = ({ size, color }: { size?: number; color?: string }) => (
  <svg data-testid="mock-icon" width={size} height={size} fill={color}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe("SmartIcon", () => {
  it("renders a lucide icon from synonym", () => {
    const { getByTestId } = render(<SmartIcon name="house" />);
    expect(getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("renders a custom icon after registering new family", () => {
    registerIconFamily("custom", {
      test: {
        synonyms: ["test", "demo", "example"],
        component: MockIcon,
      },
    });

    const { getByTestId } = render(<SmartIcon name="demo" family="custom" />);
    expect(getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("returns null for unknown synonym", () => {
    const { container } = render(<SmartIcon name="xyz" />);
    expect(container.firstChild).toBeNull();
  });

  it("supports prefix matching when enabled", () => {
    const { getByTestId } = render(<SmartIcon name="hom" prefixMatch />);
    expect(getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("does not support prefix matching when disabled", () => {
    const { container } = render(<SmartIcon name="hom" prefixMatch={false} />);
    expect(container.firstChild).toBeNull();
  });
});
