import '../assets/css/restaurant-shimmer.css';

const Shimmer = () => {
    return (
        <>
            {
                Array(10).fill("").map((e, index) => (
                    <div className="restaurant-shimmer" key={index}>
                        <div className="restaurant-image"></div>
                        <div className='restaurant-content'>
                            <div className="restaurant-heading">
                                <span className="restaurant-title"></span>
                                <span className="restaurant-cuisines"></span>
                            </div>
                            <div className="restaurant-sub-content">
                                <span className="restaurant-rating"></span>
                                <span className="restaurant-distance"></span>
                                <span className="restaurant-price"></span>
                            </div>
                            <div className="restaurant-offer"></div>
                        </div>    
                    </div>
                ))
            }    
        </>
    )
}
    
export default Shimmer;