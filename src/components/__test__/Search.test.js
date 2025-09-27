import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
const mockRestaurants = [
  {
    info: {
      id: "1",
      name: "Pizza Place",
      cuisines: ["Italian"],
      avgRating: 4.5,
      costForTwo: "500",
      cloudinaryImageId: "abc123",
    },
  },
];
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            cards: [
              {},
              {},
              {},
              {},
              {
                card: {
                  card: {
                    gridElements: {
                      infoWithStyle: {
                        restaurants: mockRestaurants,
                      },
                    },
                  },
                },
              },
            ],
          },
        }),
    })
  );
});

test("Should renderthe Body component with search", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const searchInput = await screen.findByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  const searchBtn = screen.getByText("Search");
  fireEvent.click(searchBtn);
  const topRatedBtn = screen.getByText("Top Rated Restaurents");
  expect(topRatedBtn).toBeInTheDocument();
});
