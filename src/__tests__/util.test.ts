import {
  calculateInvestmentResults,
  InvestmentParams,
  InvestmentYearData,
  isValidInvestmentInput,
} from "../util/investment";

describe("calculateInvestmentResults", () => {
  it("should return the correct investment results for a given input", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "3",
    };

    const expectedOutput: InvestmentYearData[] = [
      { year: 1, interest: 50, valueEndOfYear: 1550, annualInvestment: 500 },
      {
        year: 2,
        interest: 77.5,
        valueEndOfYear: 2127.5,
        annualInvestment: 500,
      },
      {
        year: 3,
        interest: 106.375,
        valueEndOfYear: 2733.875,
        annualInvestment: 500,
      },
    ];

    expect(calculateInvestmentResults(input)).toEqual(expectedOutput);
  });

  it("should return an empty array when duration is 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "0",
    };

    expect(calculateInvestmentResults(input)).toEqual([]);
  });

  it("should handle zero investment values correctly", () => {
    const input: InvestmentParams = {
      initialInvestment: "0",
      annualInvestment: "0",
      expectedReturn: "5",
      duration: "3",
    };

    const expectedOutput: InvestmentYearData[] = [
      { year: 1, interest: 0, valueEndOfYear: 0, annualInvestment: 0 },
      { year: 2, interest: 0, valueEndOfYear: 0, annualInvestment: 0 },
      { year: 3, interest: 0, valueEndOfYear: 0, annualInvestment: 0 },
    ];

    expect(calculateInvestmentResults(input)).toEqual(expectedOutput);
  });

  it("should handle 100% return rate correctly", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "100",
      duration: "2",
    };

    const expectedOutput: InvestmentYearData[] = [
      { year: 1, interest: 1000, valueEndOfYear: 2500, annualInvestment: 500 },
      { year: 2, interest: 2500, valueEndOfYear: 5500, annualInvestment: 500 },
    ];

    expect(calculateInvestmentResults(input)).toEqual(expectedOutput);
  });

  it("should handle a 0% return rate correctly", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "0",
      duration: "3",
    };

    const expectedOutput: InvestmentYearData[] = [
      { year: 1, interest: 0, valueEndOfYear: 1500, annualInvestment: 500 },
      { year: 2, interest: 0, valueEndOfYear: 2000, annualInvestment: 500 },
      { year: 3, interest: 0, valueEndOfYear: 2500, annualInvestment: 500 },
    ];

    expect(calculateInvestmentResults(input)).toEqual(expectedOutput);
  });
});

describe("isValidInvestmentInput", () => {
  it("should return true for valid input where both investments are positive", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(true);
  });

  it("should return true if initial is > 0 and annual is 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "0",
      expectedReturn: "5",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(true);
  });

  it("should return true if annual is > 0 and initial is 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "0",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(true);
  });

  it("should return false if both investments are 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "0",
      annualInvestment: "0",
      expectedReturn: "5",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(false);
  });

  it("should return false if expectedReturn is 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "0",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(false);
  });

  it("should return false if duration is 0", () => {
    const input: InvestmentParams = {
      initialInvestment: "1000",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "0",
    };
    expect(isValidInvestmentInput(input)).toBe(false);
  });

  it("should return false for non-numeric input", () => {
    const input: InvestmentParams = {
      initialInvestment: "abc",
      annualInvestment: "500",
      expectedReturn: "5",
      duration: "10",
    };
    expect(isValidInvestmentInput(input)).toBe(false);
  });
});
