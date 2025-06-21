export type InvestmentParams = {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
};

export type InvestmentYearData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export const isValidInvestmentInput = (inputs: InvestmentParams): boolean => {
  const initial = parseFloat(inputs.initialInvestment);
  const annual = parseFloat(inputs.annualInvestment);
  const returnRate = parseFloat(inputs.expectedReturn);
  const duration = parseFloat(inputs.duration);

  if ([initial, annual, returnRate, duration].some((val) => isNaN(val)))
    return false;

  return (
    returnRate > 0 &&
    duration > 0 &&
    ((initial > 0 && annual >= 0) || (initial >= 0 && annual > 0))
  );
};

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentParams): InvestmentYearData[] {
  const initial = parseFloat(initialInvestment);
  const annual = parseFloat(annualInvestment);
  const returnRate = parseFloat(expectedReturn);
  const years = parseInt(duration);

  const annualData: InvestmentYearData[] = [];
  let investmentValue = initial;

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (returnRate / 100);
    investmentValue += interestEarnedInYear + annual;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annual,
    });
  }

  return annualData;
}
