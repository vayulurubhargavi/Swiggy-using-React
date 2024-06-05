import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log('props received :',props);

    const { resObj } = props;
    // console.log('resobj:',resObj);
    const { cloudinaryImageId, name, avgRating, sla,cuisines, areaName, costForTwo } = resObj.info;
    return (
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt="res-img" />
            <h3>{name}</h3>
            <div className='res-info'>
                <h4>{avgRating}/5<span>&nbsp; &bull;{sla.slaString}</span></h4>
                <p >{cuisines.join(',')}</p>
                <p>{areaName}</p>
                <p>{costForTwo}</p>
            </div>
            
        </div>
    )
}

export default RestaurantCard;