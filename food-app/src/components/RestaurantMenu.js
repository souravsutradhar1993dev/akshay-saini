import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {IMG_CDN_URI} from "../constants";
import Shimmer from "./Shimmer";
import '../assets/css/restaurant-details.css';

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useRestaurantMenu(id);
    if(!restaurant) {
        return <Shimmer />;
    }
    return (
        restaurant?.statusCode === 0 ? (
            <div className="restaurant-details">
                <div className="restaurant-info">
                    <h1>{restaurant?.data?.name}</h1>
                    <img src={IMG_CDN_URI + restaurant?.data?.cloudinaryImageId} alt={restaurant?.data?.name} />
                    <h3>{restaurant?.data?.area}</h3>
                    <h3>{restaurant?.data?.city}</h3>
                    <h3>{restaurant?.data?.avgRating}</h3>
                    <h3>{restaurant?.data?.costForTwoMsg}</h3>
                </div>
                <div className="restaurant-menu">
                    <ul>
                        {
                            Object.values(restaurant?.data?.menu?.items).map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
        :
        <h1>No Restaurant Found</h1>
    );
 };

 export default RestaurantMenu;