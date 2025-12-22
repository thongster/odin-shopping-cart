import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartCount from '../CartCount'

describe("CartCount", () => {
  it("does not render anything when cart is empty", () => {
    render(<CartCount cart={[]} />);

    expect(screen.queryByText(/\d+/)).toBeNull();
  });

    it("renders the total quantity of items in the cart", () => {
    const mockCart = [
      { id: 1, count: 2 },
      { id: 2, count: 3 },
    ];

    render(<CartCount cart={mockCart} />);
    expect(screen.getByText("5")).toBeInTheDocument()
  });
});