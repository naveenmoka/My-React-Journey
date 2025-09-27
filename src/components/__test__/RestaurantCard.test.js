import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard with props data", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);
  const name = screen.getByText("Dev International");
  expect(name).toBeInTheDocument();
});
