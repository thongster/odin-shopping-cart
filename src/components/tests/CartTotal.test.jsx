import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartTotal from "../CartTotal";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import { useOutletContext } from "react-router";

const mockCart = [
  { id: 1, price: 20, count: 2 }, // 40
  { id: 2, price: 10, count: 1 }, // 10
];

describe("CartTotal", () => {
  it("renders the order summary heading", () => {
    useOutletContext.mockReturnValue({ cart: mockCart });

    render(<CartTotal />);

    expect(screen.getByText("Order Summary")).toBeInTheDocument();
  });

  it("renders the correct subtotal", () => {
    useOutletContext.mockReturnValue({ cart: mockCart });

    render(<CartTotal />);

    expect(screen.getByText("$50")).toBeInTheDocument();
  });

  it("renders the correct tax amount", () => {
    useOutletContext.mockReturnValue({ cart: mockCart });

    render(<CartTotal />);

    // 👉 Tax should be 5% of 50 = 2.5
    expect(screen.getByText("$2.5")).toBeInTheDocument();
  });

  it("renders the correct total", () => {
    useOutletContext.mockReturnValue({ cart: mockCart });

    render(<CartTotal />);

    // 👉 Total should be subtotal + tax
    expect(screen.getByText("$52.5")).toBeInTheDocument();
  });
});
