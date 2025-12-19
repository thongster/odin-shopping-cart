import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home.jsx";

const mockProducts = [
  {
    id: 1,
    title: "Black Hoodie",
    price: 59.99,
    image: "hoodie.jpg",
  },
  {
    id: 2,
    title: "Night Tee",
    price: 29.99,
    image: "tee.jpg",
  },
  {
    id: 3,
    title: "Cargo Pants",
    price: 79.99,
    image: "pants.jpg",
  },
  {
    id: 4,
    title: "Beanie",
    price: 19.99,
    image: "beanie.jpg",
  },
];

// Mock fetch globally
beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { id: 1, title: "Black Hoodie", price: 59.99, image: "img1" },
        { id: 2, title: "Night Tee", price: 29.99, image: "img2" },
        { id: 3, title: "Cargo Pants", price: 79.99, image: "img3" },
        { id: 4, title: "Beanie", price: 19.99, image: "img4" },
      ]),
    })
  ));
});

describe("Home page", () => {
  it("renders the hero section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/after dark/i)
    ).toBeInTheDocument();
  });

  it("shows loading state for featured products", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/loading/i)
    ).toBeInTheDocument();
  });

  it("renders featured products after fetch", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Black Hoodie")
      ).toBeInTheDocument();
    });

    expect(screen.getByText("Night Tee")).toBeInTheDocument();
    expect(screen.getByText("Cargo Pants")).toBeInTheDocument();
    expect(screen.getByText("Beanie")).toBeInTheDocument();
  });

  it("renders the Featured Drop section heading", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const heading = await screen.findByText(/featured drop/i);
    expect(
       heading
    ).toBeInTheDocument();
  });
});
