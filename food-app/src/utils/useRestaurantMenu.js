import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from '../constants';

const useRestaurantMenu = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const fetchMenu = async () => {
        const response = await fetch(RESTAURANT_MENU_API + id);
        const responseData = await response.json();
        setRestaurant(responseData);
    };
    useEffect(() => {
        fetchMenu();
    }, []);

    return restaurant;
};

export default useRestaurantMenu;