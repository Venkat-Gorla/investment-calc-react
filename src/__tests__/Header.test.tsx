import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the logo and title correctly", () => {
    render(<Header />);

    const logo = screen.getByRole("img", { name: /logo showing a money bag/i });
    const title = screen.getByRole("heading", {
      name: /investment calculator/i,
    });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
