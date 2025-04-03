import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  });

  const [isValid, setIsValid] = useState(false); // Track form validity

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <UserInput
        values={inputs}
        onChange={handleInputChange}
        onValid={setIsValid}
      />

      {/* Placeholder UI for validation status */}
      <p style={{ color: isValid ? "green" : "red" }}>
        {isValid
          ? "✅ All inputs are valid!"
          : "❌ Please fill all fields correctly."}
      </p>
    </>
  );
};

export default App;
