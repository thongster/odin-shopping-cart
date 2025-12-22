import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Nav from "../Nav";

const mockCart = [
  { id: 1, title: "Item One", count: 1 },
  { id: 2, title: "Item Two", count: 1 },
];

const renderNav = (cart = []) => {
  return render(
    <MemoryRouter>
      <Nav cart={cart} />
    </MemoryRouter>
  );
};

it("renders Home, Shop, and Cart links", () => {
  renderNav(mockCart);

  expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/shop/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/cart/i).length).toBeGreaterThan(0);
});

it("renders Home, Shop, and Cart links", () => {
  renderNav(mockCart);

  expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/shop/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/cart/i).length).toBeGreaterThan(0);
});

it("toggles the mobile menu when hamburger is clicked", () => {
  renderNav(mockCart);

  const hamburger = screen.getByRole("button");

  fireEvent.click(hamburger);

  // Mobile links should now be visible
  expect(screen.getAllByText(/home/i).length).toBeGreaterThan(1);
});

it("toggles the mobile menu when hamburger is clicked", () => {
  renderNav(mockCart);

  const hamburger = screen.getByRole("button");

  fireEvent.click(hamburger);

  // Mobile links should now be visible
  expect(screen.getAllByText(/home/i).length).toBeGreaterThan(1);
});