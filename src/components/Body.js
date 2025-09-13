import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";


const Body = () => {
    const [ListofRestaurents,setListofRestaurents] = useState(resList);
    return (
        <div className="body">
            <div className="fiter">
                <button className="filter-btn"
                    onClick={() => {
                        const filterList = resList.filter((res) => 
                            res.info.avgRating > 4
                        );
                        setListofRestaurents(filterList); 
                    }}
                    
                >Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {
                    ListofRestaurents.map((restaurent) => <RestaurentCard key={restaurent.info.id} resData={ restaurent} />)
                }
                </div>
                    
        </div>
    )
}

export default Body;