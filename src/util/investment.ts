// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
// export function calculateInvestmentResults({
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// }) {
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     annualData.push({
//       year: i + 1, // year identifier
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year
//       annualInvestment: annualInvestment, // investment added in this year
//     });
//   }

//   return annualData;
// }

export type InvestmentParams = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type InvestmentYearData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentParams): InvestmentYearData[] {
  const annualData: InvestmentYearData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment,
    });
  }

  return annualData;
}
