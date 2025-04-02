import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders the investment calculator heading", () => {
  render(<Header />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Investment Calculator"
  );
});
