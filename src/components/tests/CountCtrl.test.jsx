import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CountCtrl from "../CountCtrl";

const setup = (count = 0) => {
  const onChange = vi.fn();

  render(<CountCtrl count={count} onChange={onChange} />);

  return { onChange };
};

describe("CountCtrl", () => {
  it("renders increment and decrement buttons and quantity input", () => {
    setup(2);

    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByLabelText("Quantity")).toBeInTheDocument();
  });

  it("calls onChange with count + 1 when + button is clicked", () => {
    const { onChange } = setup(2);

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("calls onChange with count - 1 when - button is clicked", () => {
    const { onChange } = setup(2);

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("does not call onChange when count is 0 and - is clicked", () => {
    const { onChange } = setup(0);

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("calls onChange when input value changes", () => {
    const { onChange } = setup(1);

    const input = screen.getByLabelText(/quantity/i);
    fireEvent.change(input, { target: { value: "5" } });
    expect(onChange).toHaveBeenCalledWith(5);
  });
});
