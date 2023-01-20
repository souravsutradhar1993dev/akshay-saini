import '../assets/css/restaurant-card.css';

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString, aggregatedDiscountInfo}) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img alt={name} src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />
            </div>
            <div className='restaurant-content'>
                <div className="restaurant-heading">
                    <span className="restaurant-title">{name}</span>
                    <span className="restaurant-cuisines">{cuisines.join(',')}</span>
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