import React from "react";

// pending: 
// - this type is not needed, should use the one from the utils folder
// - understand and make improvements
// - can use Tailwind to create same look and feel for this component
// - success validation message is not needed
// - increase table data font for better readability
type InvestmentYearData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

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
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          totalInterest += yearData.interest;
          totalInvested += yearData.annualInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>${yearData.valueEndOfYear.toFixed(2)}</td>
              <td>${yearData.interest.toFixed(2)}</td>
              <td>${totalInterest.toFixed(2)}</td>
              <td>${totalInvested.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
