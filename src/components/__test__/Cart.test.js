import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should render the Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Veg Pizza (16)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  //expect(screen.getAllByTestId("foodItems").length).toBe(18);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(16);
  expect(
    screen.getByText("Cart is empty. Add some items to th cart")
  ).toBeInTheDocument();
});
