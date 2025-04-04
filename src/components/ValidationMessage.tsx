import React from "react";

// pending:
// - message string can also come as a prop, since only calling code is aware
//   of what message to show
// - can use Tailwind to create same look and feel for this component

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
