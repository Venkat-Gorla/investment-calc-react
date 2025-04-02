import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// export default App;

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  });

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <UserInput values={inputs} onChange={handleInputChange} />
    </>
  );
};

export default App;
