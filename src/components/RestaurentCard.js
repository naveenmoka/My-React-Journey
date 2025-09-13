import { RES_IMG } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={RES_IMG + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;