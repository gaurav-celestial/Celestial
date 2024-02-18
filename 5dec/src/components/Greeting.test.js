import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders hello world as a test", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
});
