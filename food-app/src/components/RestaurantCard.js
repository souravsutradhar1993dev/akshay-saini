import { useNavigate } from "react-router-dom";
import {IMG_CDN_URI} from "../../constants";
import '../assets/css/restaurant-card.css';

const RestaurantCard = ({id, name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString, aggregatedDiscountInfo}) => {
    const navigate =  useNavigate();

    const navigateToLink = (link) => {
        navigate(link);
    };
    return (
        <div className="restaurant-card" onClick={() => navigateToLink("/restaurants/" + id)}>
            <div className="restaurant-image">
                <img alt={name} src={IMG_CDN_URI + cloudinaryImageId} />
            </div>
            <div className='restaurant-content'>
                <div className="restaurant-heading">
                    <span className="restaurant-title">{name}</span>
                    <span className="restaurant-cuisines">{cuisines ? cuisines.join(',') : ''}</span>
                </div>
                <div className="restaurant-sub-content">
                    <span className="restaurant-rating">{avgRating}</span>
                    <span className="restaurant-distance">{deliveryTime} mins</span>
                    <span className="restaurant-price">{costForTwoString}</span>
                </div>
                <div className="restaurant-offer">
                    {aggregatedDiscountInfo?.descriptionList[0]?.meta}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;