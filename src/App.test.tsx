import { render, fireEvent, screen, cleanup } from "@solidjs/testing-library";
import { App } from "./App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  test('it should render "Hello, World!"', () => {
    render(() => <App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Hello, World!");
  });

  test("it should have a count that starts at 0", () => {
    render(() => <App />);
    expect(screen.getByRole("button")).toHaveTextContent("Clicked 0 times");
  });

  test("it should increment the count when the button is pressed", async () => {
    render(() => <App />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    await Promise.resolve();

    expect(screen.getByRole("button")).toHaveTextContent("Clicked 1 time");
  });
});
