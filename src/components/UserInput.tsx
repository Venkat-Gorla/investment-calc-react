import React from "react";

type UserInputProps = {
  values: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  onChange: (field: string, value: number) => void;
};

const UserInput: React.FC<UserInputProps> = ({ values, onChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={values.initialInvestment}
            onChange={(e) => onChange("initialInvestment", +e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={values.annualInvestment}
            onChange={(e) => onChange("annualInvestment", +e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return (%)</label>
          <input
            type="number"
            id="expectedReturn"
            value={values.expectedReturn}
            onChange={(e) => onChange("expectedReturn", +e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={values.duration}
            onChange={(e) => onChange("duration", +e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
