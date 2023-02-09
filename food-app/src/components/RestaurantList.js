import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import '../assets/css/restaurant-list.css';
import useRestaurant from "../utils/useRestaurant";

const RestaurantList = () => {
    const [restaurant, setRestaurant] = useRestaurant();
    if(!restaurant) {
        return <Shimmer />;
    }

    return (
        <>
            <input type="text" onChange={e => setRestaurant(e.target.value.toLowerCase())} />
                {
                    <div className="restaurant-list">
                        
                        {
                            restaurant.length > 0 ?
                                restaurant.map(item => (
                                    <RestaurantCard {...item.data} key={item.data.id} />
                                ))
                            : <h1>No Restaurant Found</h1>
                        }
                    </div>
                } 
        </>
    );
};

export default RestaurantList;