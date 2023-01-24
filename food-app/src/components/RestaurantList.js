import RestaurantCard from "./RestaurantCard";
import '../assets/css/restaurant-list.css';

const RestaurantList = ({restaurantLists}) => (
    <div className="restaurant-list">
        {restaurantLists.map(item => (
            <RestaurantCard {...item.data} key={item.data.id} />
        ))}
    </div>
);

export default RestaurantList;