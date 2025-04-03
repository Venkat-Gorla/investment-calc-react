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

  const isValid = Object.values(inputs).every((val) => val > 0);

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <UserInput values={inputs} onChange={handleInputChange} />

      {/* Placeholder UI for validation status */}
      {/* pending: fix inline style and make separate component */}
      <p
        style={{
          color: isValid ? "green" : "red",
          textAlign: "center",
          display: "block",
        }}
      >
        {isValid
          ? "✅ All inputs are valid!"
          : "❌ Please fill all fields correctly."}
      </p>
    </>
  );
};

export default App;
