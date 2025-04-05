import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ValidationMessage from "./components/ValidationMessage";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  });

  const isValid = Object.values(inputs).every((val) => val > 0);

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <UserInput values={inputs} onChange={handleInputChange} />
      <ValidationMessage
        isValid={isValid}
        message="❌ Please enter positive numbers for all the fields."
      />

      {isValid && (
        <Results
          results={calculateInvestmentResults(inputs)}
          initialInvestment={inputs.initialInvestment}
        />
      )}
    </>
  );
};

export default App;
