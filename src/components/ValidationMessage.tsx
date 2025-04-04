import React from "react";

// pending:
// message string can also come as a prop, since only calling code is aware
// of what message to show

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
