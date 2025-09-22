import { RES_IMG } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="p-4 m-6 w-54 bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="mb-3 w-100% rounded-lg"
        alt="res-logo"
        src={RES_IMG + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-xl ">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurentCard;
