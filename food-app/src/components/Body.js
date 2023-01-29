import RestaurantList from "./RestaurantList";
import {RESTAURANT_LIST_API} from "../../constants";
import { useEffect, useState } from "react";

const Body = () => {
    const fiterData = searchText => restaurantFullList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));

    const getRestaurantData = async () => {
        let response = await fetch(RESTAURANT_LIST_API);
        response = await response.json();
        response = response?.data?.cards[2]?.data?.data?.cards;
        setRestaurantFilteredList(response);
        setRestaurantFullList(response);
    }

    const [restaurantFilteredList, setRestaurantFilteredList] = useState([]);
    const [restaurantFullList, setRestaurantFullList] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        getRestaurantData();
    }, []);
    useEffect(() => {
        setRestaurantFilteredList(fiterData(searchText));
    }, [searchText]);
    return (
        <div className="body">
            <input type="text" onChange={e => setSearchText(e.target.value.toLowerCase())} />
            <RestaurantList restaurantLists={restaurantFilteredList} />
        </div>
    );
};

export default Body;