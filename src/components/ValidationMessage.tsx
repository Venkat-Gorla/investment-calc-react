import React from "react";

type ValidationMessageProps = {
  isValid: boolean;
};

const ValidationMessage: React.FC<ValidationMessageProps> = ({ isValid }) => {
  if (isValid) return null;

  return (
    <p className="validation-error">
      ❌ Please enter positive numbers for all the fields.
    </p>
  );
};

export default ValidationMessage;
