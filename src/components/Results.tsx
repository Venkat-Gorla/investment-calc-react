import React from "react";
import { InvestmentYearData } from "../util/investment";

type ResultsProps = {
  results: InvestmentYearData[];
  initialInvestment: number;
};

const Results: React.FC<ResultsProps> = ({ results, initialInvestment }) => {
  let totalInterest = 0;
  let totalInvested = initialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          totalInterest += yearData.interest;
          totalInvested += yearData.annualInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>${totalInvested.toFixed(2)}</td>
              <td>${yearData.interest.toFixed(2)}</td>
              <td>${totalInterest.toFixed(2)}</td>
              <td>${yearData.valueEndOfYear.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
