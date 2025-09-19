import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json);
  };
  if (restaurantInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h2>MENU</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.price || item.card.info.defaultPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
