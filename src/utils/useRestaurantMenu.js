import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json);
  };
  return restaurantInfo;
};
export default useRestaurantMenu;
