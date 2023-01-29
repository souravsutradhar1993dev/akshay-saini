import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import '../assets/css/restaurant-list.css';

const RestaurantList = ({restaurantLists}) => {
    return (
        <div className="restaurant-list">
            {restaurantLists.length > 0 ? restaurantLists.map(item => (
                <RestaurantCard {...item.data} key={item.data.id} />
            )) : <Shimmer />}
        </div>
    );
};

export default RestaurantList;