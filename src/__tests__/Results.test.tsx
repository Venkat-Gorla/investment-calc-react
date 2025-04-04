import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "../components/Results";
import { InvestmentYearData } from "../util/investment";

describe("Results", () => {
  const sampleResults: InvestmentYearData[] = [
    {
      year: 1,
      valueEndOfYear: 1600,
      interest: 100,
      annualInvestment: 500,
    },
    {
      year: 2,
      valueEndOfYear: 2260,
      interest: 160,
      annualInvestment: 500,
    },
  ];

  it("renders a table with correct headers", () => {
    render(<Results results={sampleResults} initialInvestment={1000} />);
    const headers = [
      "Year",
      "Investment Value",
      "Interest (Year)",
      "Total Interest",
      "Invested Capital",
    ];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("renders the correct number of rows", () => {
    render(<Results results={sampleResults} initialInvestment={1000} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(sampleResults.length + 1); // +1 for header row
  });

  it("displays correct calculated values", () => {
    render(<Results results={sampleResults} initialInvestment={1000} />);
    expect(screen.getByText("$2000.00")).toBeInTheDocument(); // Invested capital after 2 years
    expect(screen.getByText("$2260.00")).toBeInTheDocument(); // Investment value after 2 years
  });
});
