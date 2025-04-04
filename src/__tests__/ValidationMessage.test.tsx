import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ValidationMessage from "../components/ValidationMessage";

describe("ValidationMessage", () => {
  it("renders nothing when isValid is true", () => {
    const { container } = render(<ValidationMessage isValid={true} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders error message when isValid is false", () => {
    render(<ValidationMessage isValid={false} />);
    expect(
      screen.getByText("❌ Please enter positive numbers for all the fields.")
    ).toBeInTheDocument();
  });

  it("has the correct CSS class applied", () => {
    render(<ValidationMessage isValid={false} />);
    const errorMessageElement = screen.getByText(
      "❌ Please enter positive numbers for all the fields."
    );
    expect(errorMessageElement.tagName).toBe("P");
    expect(errorMessageElement).toHaveClass("validation-error");
  });
});
