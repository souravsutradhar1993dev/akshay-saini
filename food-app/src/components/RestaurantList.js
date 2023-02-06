import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import '../assets/css/restaurant-list.css';
import {RESTAURANT_LIST_API} from "../../constants";

const RestaurantList = () => {

    const fiterData = searchText => restaurantFullList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));

    const getRestaurantData = async () => {
        let response = await fetch(RESTAURANT_LIST_API);
        response = await response.json();
        response = response?.data?.cards[2]?.data?.data?.cards;
        response = response ? response : [];
        
        setRestaurantFilteredList(response);
        setRestaurantFullList(response);
        setIsRestaurantLoading(false);
    }

    const [restaurantFilteredList, setRestaurantFilteredList] = useState([]);
    const [restaurantFullList, setRestaurantFullList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isRestaurantLoading, setIsRestaurantLoading] = useState(true);
    
    useEffect(() => {
        getRestaurantData();
    }, []);
    useEffect(() => {
        setRestaurantFilteredList(fiterData(searchText));
    }, [searchText]);
    return (
        <>
            <input type="text" onChange={e => setSearchText(e.target.value.toLowerCase())} />
            
                {
                    isRestaurantLoading ? <Shimmer /> : (restaurantFilteredList.length > 0 ?
                    (
                        <div className="restaurant-list">
                            {
                                restaurantFilteredList.map(item => (
                                    <RestaurantCard {...item.data} key={item.data.id} />
                                ))
                            }
                        </div>
                    )  : <h2>No restaurants found</h2> )
                } 
        </>
    );
};

export default RestaurantList;