import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from '../../constants';
import {IMG_CDN_URI} from "../../constants";
import Shimmer from "./Shimmer";
import '../assets/css/restaurant-details.css';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [isRestaurantLoading, setIsRestaurantLoading] = useState(true);
    const fetchMenu = async () => {
        const response = await fetch(RESTAURANT_MENU_API + id);
        const responseData = await response.json();
        setRestaurant(responseData?.data);
        setIsRestaurantLoading(false);   
    };
    useEffect(() => {
        fetchMenu();
    }, []);
    return (
        isRestaurantLoading ? <Shimmer /> : (
            restaurant ? (
                <div className="restaurant-details">
                    <div className="restaurant-info">
                        <h1>{restaurant?.name}</h1>
                        <img src={IMG_CDN_URI + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
                        <h3>{restaurant?.area}</h3>
                        <h3>{restaurant?.city}</h3>
                        <h3>{restaurant?.avgRating}</h3>
                        <h3>{restaurant?.costForTwoMsg}</h3>
                    </div>
                    <div className="restaurant-menu">
                        <ul>
                            {
                                Object.values(restaurant?.menu?.items).map(item => (
                                    <li key={item.id}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            )
            :
            <h2>No restaurant found</h2>
        )
    );
 };

 export default RestaurantMenu;