import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("Should load Button inside  contact us Component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  //const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
test("Should load input placeholder  inside  contact us Component", () => {
  render(<Contact />);
  const button = screen.getByPlaceholderText("name");
  expect(button).toBeInTheDocument();
});
test("should load 2 input boxes on the contact Component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes.length);
  expect(inputBoxes.length).toBe(2);
});
