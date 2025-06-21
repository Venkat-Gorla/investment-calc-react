import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ValidationMessage from "./components/ValidationMessage";
import Results from "./components/Results";
import {
  InvestmentParams,
  isValidInvestmentInput,
  calculateInvestmentResults,
} from "./util/investment";

const App: React.FC = () => {
  const [inputs, setInputs] = useState<InvestmentParams>({
    initialInvestment: "1000",
    annualInvestment: "500",
    expectedReturn: "5",
    duration: "10",
  });

  const isValid = isValidInvestmentInput(inputs);

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <UserInput values={inputs} onChange={handleInputChange} />
      <ValidationMessage
        isValid={isValid}
        message="❌ Initial or Annual Investment must be > 0. All other fields must be positive."
      />

      {isValid && (
        <Results
          results={calculateInvestmentResults(inputs)}
          initialInvestment={parseFloat(inputs.initialInvestment)}
        />
      )}
    </>
  );
};

export default App;
