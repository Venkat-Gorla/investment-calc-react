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
      annualInvestment, // investment added in this year
    });
  }

  return annualData;
}
