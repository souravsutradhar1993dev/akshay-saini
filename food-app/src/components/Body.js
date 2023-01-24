import RestaurantList from "./RestaurantList";
import {restaurantLists} from "../../constants";
import { useEffect, useState } from "react";

const Body = () => {
    const fiterData = searchText => restaurantLists.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));

    const [restaurantList, setRestaurantList] = useState(restaurantLists);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        setRestaurantList(fiterData(searchText));
    }, [searchText]);
    return (
        <div className="body">
            <input type="text" onChange={e => setSearchText(e.target.value.toLowerCase())} />
            <RestaurantList restaurantLists={restaurantList} />
        </div>
    );
};

export default Body;