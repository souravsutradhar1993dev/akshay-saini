import {useState, useEffect} from 'react';
import {RESTAURANT_LIST_API} from "../constants";

const useRestaurant = () => {
    const fiterData = searchText => restaurantFullList ? restaurantFullList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText)) : null;

    const getRestaurantData = async () => {
        let response = await fetch(RESTAURANT_LIST_API);
        response = await response.json();
        response = response?.data?.cards[2]?.data?.data?.cards;
        response = response ? response : [];
        
        setRestaurantFilteredList(response);  
        setRestaurantFullList(response);
    }

    const [restaurantFilteredList, setRestaurantFilteredList] = useState(null);
    const [restaurantFullList, setRestaurantFullList] = useState(null);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        getRestaurantData();
    }, []);
    useEffect(() => {
        setRestaurantFilteredList(fiterData(searchText));
    }, [searchText]);

    return [
        restaurantFilteredList, 
        setSearchText
    ];
};

export default useRestaurant;