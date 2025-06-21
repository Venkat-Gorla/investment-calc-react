import React from "react";

type UserInputProps = {
  values: {
    initialInvestment: string;
    annualInvestment: string;
    expectedReturn: string;
    duration: string;
  };
  onChange: (field: string, value: string) => void;
};

const UserInput: React.FC<UserInputProps> = ({ values, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            placeholder="Required"
            value={values.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            placeholder="Required"
            value={values.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return (%)</label>
          <input
            type="number"
            id="expectedReturn"
            placeholder="Required"
            value={values.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration (years)</label>
          <input
            type="number"
            id="duration"
            placeholder="Required"
            value={values.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
