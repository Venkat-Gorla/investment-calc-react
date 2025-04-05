import React from "react";

type ValidationMessageProps = {
  isValid: boolean;
  message: string;
};

const ValidationMessage: React.FC<ValidationMessageProps> = ({
  isValid,
  message,
}) => {
  if (isValid) return null;

  return <p className="validation-error">{message}</p>;
};

export default ValidationMessage;
