import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ValidationMessage from "../components/ValidationMessage";

describe("ValidationMessage", () => {
  const TEST_MESSAGE = "❌ Please enter positive numbers for all the fields.";

  it("renders nothing when isValid is true", () => {
    const { container } = render(
      <ValidationMessage isValid={true} message={TEST_MESSAGE} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders error message when isValid is false", () => {
    render(<ValidationMessage isValid={false} message={TEST_MESSAGE} />);
    expect(screen.getByText(TEST_MESSAGE)).toBeInTheDocument();
  });

  it("has the correct CSS class applied", () => {
    render(<ValidationMessage isValid={false} message={TEST_MESSAGE} />);
    const errorMessageElement = screen.getByText(TEST_MESSAGE);
    expect(errorMessageElement.tagName).toBe("P");
    expect(errorMessageElement).toHaveClass("validation-error");
  });
});
