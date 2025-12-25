import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CartHeader from "../CartHeader";
import { useOutletContext } from "react-router";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

const setup = () => {
  const clearCart = vi.fn();

  useOutletContext.mockReturnValue({ clearCart });

  render(<CartHeader />);

  return { clearCart };
};

describe("CartHeader", () => {
  it("renders the cart heading and description", () => {
    setup();

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(
      screen.getByText("Review items before checkout."),
    ).toBeInTheDocument();
  });

  it("calls clearCart when Clear button is clicked", () => {
    const { clearCart } = setup();

    const clearBtn = screen.getByText(/clear/i);
    fireEvent.click(clearBtn);
    expect(clearCart).toHaveBeenCalled();
  });
});
