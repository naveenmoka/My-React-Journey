import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
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
