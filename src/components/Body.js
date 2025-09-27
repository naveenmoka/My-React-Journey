import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { RESTAURENTS_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURENTS_LIST_URL);

    const json = await data.json();
    setListofRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false)
  //   return (
  //     <h1>Looks like you're offline!! Please check your internet connection</h1>
  //   );

  return (ListofRestaurents?.length ?? 0) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className=" m-4 p-4 ">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 ml-10 rounded-lg border-2"
            onClick={() => {
              const filterRestaurants = ListofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterRestaurants(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 m-4 ml-0 rounded-lg border-2"
            onClick={() => {
              const filterList = ListofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurants(filterList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurent) => (
          <Link
            to={"/restaurant/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
