import React from "react";

type ValidationMessageProps = {
  isValid: boolean;
};

const ValidationMessage: React.FC<ValidationMessageProps> = ({ isValid }) => {
  return (
    <p
      // fix inline style, if needed
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
  );
};

export default ValidationMessage;
